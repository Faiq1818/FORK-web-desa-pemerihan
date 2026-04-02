import prisma from "@/libs/prisma";

export async function findUniqueUserByName(username: string) {
  return await prisma.user.findUnique({
    where: { name: username },
  });
}
