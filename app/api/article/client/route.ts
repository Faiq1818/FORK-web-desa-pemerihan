import * as z from "zod";
import { getArticleList } from "@/services/articleServices";

const listPagingSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
});

export async function GET(req: Request) {
  try {
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
        success: true,
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
  } catch (err) {
    console.error(err);
    return Response.json(
      {
        error: "Internal Server Error",
        message: "An unexpected error occurred while processing the request.",
      },
      { status: 500 },
    );
  }
}
