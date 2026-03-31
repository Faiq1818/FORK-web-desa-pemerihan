import { Article } from "@/generated/prisma/client";
import { countArticle, findArticleList } from "@/repository/articleRepository";

type getArticleListResult =
  | {
      success: true;
      articleList: Article[];
      dataCount: number;
      totalPages: number;
    }
  | {
      success: false;
      error: string;
      message: string;
      meta: { page: number; totalPages: number };
      status: number;
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
      error: "Page not found",
      message: `Only ${totalPages} page available.`,
      meta: { page, totalPages },
      status: 404,
    };
  }

  return {
    success: true,
    articleList,
    dataCount,
    totalPages,
  };
}
