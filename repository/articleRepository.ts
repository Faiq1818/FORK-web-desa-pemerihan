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

export async function findUniqueSlug(slug: string) {
  return await prisma.article.findUnique({
    where: {
      slug: slug,
    },
  });
}

export async function pushArticle(
  title: string,
  slug: string,
  content: string,
  featuredImageUrl: string,
  shortDescription: string,
) {
  return await prisma.article.create({
    data: {
      title: title,
      slug: slug,
      content: content,
      featuredImageUrl: featuredImageUrl,
      shortDescription: shortDescription,
    },
  });
}
