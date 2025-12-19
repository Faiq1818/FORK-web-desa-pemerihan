import * as z from "zod";

export async function checkMissingBody(req: any) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { error: "Invalid or missing JSON body" },
      { status: 400 },
    );
  }
  return body;
}
