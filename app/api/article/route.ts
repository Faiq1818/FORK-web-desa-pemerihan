import prisma from "@/libs/prisma";
import { Prisma } from "@/generated/prisma/client";
import * as z from "zod";
import { JwtPayload } from "jsonwebtoken";
import { validateBody } from "@/helpers/requestHelper";
import { validateJwtAuthHelper } from "@/helpers/authHelper";
import { generateSlug } from "@/helpers/generateSlugHelper";
import { deleteImgInBucket } from "@/libs/awsS3Action";
import { getArticleList } from "@/services/articleServices";

const Article = z.object({
  title: z.string().min(5),
  content: z.string().min(5),
  featuredImageUrl: z.string().min(5),
  shortDescription: z.string().min(5),
});

const listPagingSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
});

interface MyJwtPayload extends JwtPayload {
  data: {
    userId: number;
    username: string;
  };
}

//////////
// POST //
//////////
export async function POST(req: Request) {
  // validate body
  const result = await validateBody(req, Article);

  if (!result.success) {
    const { featuredImageUrl } = result.error.body as Partial<
      z.infer<typeof Article>
    >;

    if (typeof featuredImageUrl === "string") {
      await deleteImgInBucket([featuredImageUrl]);
    }
    return Response.json(
      { error: result.error },
      { status: result.error.status },
    );
  }

  // validate the jwt token
  const decodedJwt = await validateJwtAuthHelper(
    req.headers.get("authorization"),
  );
  if (!decodedJwt.success) {
    return Response.json(
      { error: decodedJwt.error, success: decodedJwt.success },
      { status: decodedJwt.error.status },
    );
  }

  // get the payload from jwt
  const payload = decodedJwt.data as MyJwtPayload;

  // checking if the user are in the db
  const userExists = await prisma.user.findUnique({
    where: { id: payload.data.userId },
  });

  if (!userExists) {
    return Response.json(
      { error: "User tidak valid / tidak ditemukan" },
      { status: 404 },
    );
  }

  // generate slug from title
  const finalSlug = generateSlug(result.data.title);

  // check if slug is already exist and throw error
  const checkSlugExist = await prisma.article.findUnique({
    where: {
      slug: finalSlug,
    },
  });
  if (checkSlugExist) {
    return Response.json({ error: "Slug sudah ada" }, { status: 409 });
  }

  // push new article to db
  try {
    await prisma.article.create({
      data: {
        title: result.data.title,
        slug: finalSlug,
        content: result.data.content,
        featuredImageUrl: result.data.featuredImageUrl,
        shortDescription: result.data.shortDescription,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
        case "P2002": // unique constraint
          return Response.json(
            { error: "Slug already exists" },
            { status: 409 },
          );

        default:
          return Response.json(
            { error: "Database error", err, code: err.code },
            { status: 500 },
          );
      }
    }
  }

  // finally send success response
  return Response.json(
    { message: "Article berhasil diupload" },
    { status: 200 },
  );
}

/////////
// GET //
/////////
export async function GET(req: Request) {
  // validate the jwt token
  const decodedJwt = await validateJwtAuthHelper(
    req.headers.get("authorization"),
  );
  if (!decodedJwt.success) {
    return Response.json(
      { error: decodedJwt.error, success: decodedJwt.success },
      { status: decodedJwt.error.status },
    );
  }

  const { searchParams } = new URL(req.url);

  const queryParams = {
    page: searchParams.get("page"),
    limit: searchParams.get("limit"),
  };

  const result = listPagingSchema.safeParse(queryParams);
  if (!result.success) {
    return Response.json(
      { error: z.treeifyError(result.error) },
      { status: 422 },
    );
  }
  const { page, limit } = result.data;

  const articleList = await getArticleList(page, limit);
  if (!articleList.success) {
    return Response.json(
      {
        error: articleList.error,
        message: articleList.message,
        meta: articleList.meta,
      },
      { status: articleList.status },
    );
  }

  return Response.json(
    {
      data: articleList.articleList,
      meta: {
        page,
        limit,
        totalItems: articleList.dataCount,
        totalPages: articleList.totalPages,
        hasNextPage: page < articleList.totalPages,
        hasPrevPage: page > 1,
      },
    },
    { status: 200 },
  );
}
