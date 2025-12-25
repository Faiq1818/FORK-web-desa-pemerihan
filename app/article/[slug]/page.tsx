import { Prisma } from "@/generated/prisma/client";
import prisma from "@/libs/prisma";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let article

  try {
    article = await prisma.article.findUniqueOrThrow({
      where: {
        slug: slug,
      },
    });
    console.log("render: ", article)
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

  return (
    <>
      <div className="mx-80 mt-10">
        <h1 className="font-bold text-5xl mb-5">
          <div
            dangerouslySetInnerHTML={{ __html: article?.title ?? "" }}
          />
        </h1>

        {/* ini merender content artikel dari db sebagai html, rentan xss, jadi hati-hati*/}
        <div
          dangerouslySetInnerHTML={{ __html: article?.content ?? "" }}
        />

      </div>
    </>
  );
}
