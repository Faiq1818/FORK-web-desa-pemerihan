import prisma from "@/libs/prisma";
import { Article, Prisma } from "@/generated/prisma/client";

export async function getArticleList(
  page: number,
  limit: number,
): Promise<{ articleList: Article[]; dataCount: number }> {
  const skip = (page - 1) * limit;

  let articleList: Article[] = [];
  let dataCount = 0;

  try {
    [articleList, dataCount] = await prisma.$transaction([
      prisma.article.findMany({
        skip: skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.article.count(),
    ]);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw err;
    }
  }

  return { articleList, dataCount };
}
