import { Article } from "@/generated/prisma/client";
import {
  countArticle,
  deleteArticleById,
  findArticleById,
  findArticleList,
  findUniqueUser,
  pushArticle,
} from "@/repository/articleRepository";
import { generateSlug } from "@/helpers/generateSlugHelper";
import { ErrorStatus } from "@/helpers/httpErrorsHelper";
import { deleteImgInBucket } from "@/libs/awsS3Action";

type getArticleListResult =
  | {
      success: true;
      articleList: Article[];
      dataCount: number;
      totalPages: number;
    }
  | {
      success: false;
      error: ErrorStatus;
      message: string;
      meta: { page: number; totalPages: number };
    };

export async function getArticleList(
  page: number,
  limit: number,
): Promise<getArticleListResult> {
  const skip = (page - 1) * limit;

  let articleList: Article[] = [];
  let dataCount = 0;

  try {
    articleList = await findArticleList(skip, limit);
    dataCount = await countArticle();
  } catch (err) {
    throw err;
  }

  const totalPages = Math.ceil(dataCount / limit);

  if (page > totalPages && dataCount > 0) {
    return {
      success: false,
      error: "PAGE_NOT_FOUND",
      message: `Only ${totalPages} page available.`,
      meta: { page, totalPages },
    };
  }

  return {
    success: true,
    articleList,
    dataCount,
    totalPages,
  };
}

type saveArticleResult =
  | {
      success: true;
    }
  | {
      success: false;
      error: SaveArticleErrorCode;
      message: string;
    };

type SaveArticleErrorCode =
  | "USER_NOT_FOUND"
  | "SLUG_ALREADY_EXISTS"
  | "DATABASE_ERROR";

export async function saveArticle(
  userId: number,
  title: string,
  content: string,
  featuredImageUrl: string,
  shortDescription: string,
): Promise<saveArticleResult> {
  // checking if the user are in the db
  const userExists = await findUniqueUser(userId);
  if (!userExists) {
    return {
      success: false,
      error: "USER_NOT_FOUND",
      message: "The specified user was not found.",
    };
  }

  // generate slug from title
  const finalSlug = generateSlug(title);

  // push new article to db
  const dbResult = await pushArticle(
    title,
    finalSlug,
    content,
    featuredImageUrl,
    shortDescription,
  );
  if (!dbResult.success) {
    if (dbResult.code === "UNIQUE_CONSTRAINT_FAILED") {
      return {
        success: false,
        error: "SLUG_ALREADY_EXISTS",
        message: "A record with the same unique field already exists.",
      };
    }

    return {
      success: false,
      error: "DATABASE_ERROR",
      message: "An unexpected database error occurred.",
    };
  }

  return {
    success: true,
  };
}

type deleteArticleResult =
  | { success: true; data: Article }
  | { success: false; error: ErrorStatus; message: string };

export async function deleteArticle(id: number): Promise<deleteArticleResult> {
  const article = await findArticleById(id);
  if (!article) {
    return {
      success: false,
      error: "ARTICLE_NOT_FOUND",
      message: "Artikel tidak ditemukan.",
    };
  }

  await deleteImgInBucket([article.featuredImageUrl]);

  const dbResult = await deleteArticleById(id);
  if (!dbResult.success) {
    return {
      success: false,
      error: "DATABASE_ERROR",
      message: "An unexpected database error occurred.",
    };
  }

  return { success: true, data: dbResult.data };
}
