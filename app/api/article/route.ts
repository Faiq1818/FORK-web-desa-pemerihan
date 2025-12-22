import prisma from "@/libs/prisma";
import { Prisma } from "@/generated/prisma/client";
import * as z from "zod";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AUTH_CONFIG } from "@/libs/JWTConfig";
import { validateBody } from "@/libs/requestHelper";

const Article = z.object({
  title: z.string().min(5),
  slug: z.string().min(5),
  content: z.string().min(5),
  featuredImageUrl: z.string().min(5),
  additionalImages: z.array(z.string().min(5)),
});

// interface/type for jwt payload (typescript things lol, they are so strict about type)
interface MyJwtPayload extends JwtPayload {
  data: {
    userId: number;
    username: string;
  };
}

export async function POST(req: Request) {
  // validate body
  const result = await validateBody(req, Article);
  if (!result.success) {
    return Response.json(
      { error: result.error },
      { status: result.error.status },
    );
  }

  // get bearer authorization from headers and validate and split to get the token only, maybe we need to make an helper on this
  const authHeader = req.headers.get("authorization");
  let token;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.error("Token tidak valid atau tidak ditemukan");
    return Response.json(
      { message: "Token tidak valid atau tidak ditemukan" },
      { status: 401 },
    );
  } else {
    token = authHeader.split(" ")[1];
    console.log(token);
  }

  // verifying the jwt, we need to make the helper ngl
  let decodedUser;
  try {
    decodedUser = jwt.verify(token, AUTH_CONFIG.JWT_SECRET);
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return Response.json(
        { message: "Token sudah kadaluwarsa" },
        { status: 401 },
      );
    } else if (err instanceof jwt.JsonWebTokenError) {
      return Response.json({ message: "Token tidak valid" }, { status: 401 });
    } else {
      return Response.json(
        { message: "Internal Server Error saat Auth" },
        { status: 500 },
      );
    }
  }

  // get the payload from jwt
  const payload = decodedUser as MyJwtPayload;

  // checking if the user are in the db
  try {
    await prisma.user.findFirstOrThrow({
      where: {
        name: payload.data.username,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
        case "P2025":
          return Response.json({ error: "User tidak valid" }, { status: 404 });
        default:
          return Response.json({ error: "Database error" }, { status: 500 });
      }
    }
  }

  // checking if the user are in the db
  try {
    await prisma.user.findUniqueOrThrow({
      where: {
        name: payload.data.username,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
        case "P2025":
          return Response.json({ error: "User tidak valid" }, { status: 404 });
        default:
          return Response.json({ error: "Database error" }, { status: 500 });
      }
    }
  }

  // check if slug is already exist and throw error
  const checkSlugExist = await prisma.article.findUnique({
    where: {
      slug: result.data.slug,
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
        slug: result.data.slug,
        content: result.data.content,
        featuredImageUrl: result.data.featuredImageUrl,
        additionalImages: result.data.additionalImages,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
        case "P2002": // unique constraint
          return Response.json(
            { error: "Username already exists" },
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
