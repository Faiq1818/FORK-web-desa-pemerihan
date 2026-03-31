import prisma from "@/libs/prisma";

export async function findArticleList(skip: number, limit: number) {
  return await prisma.article.findMany({
    skip: skip,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function countArticle() {
  return await prisma.article.count();
}
