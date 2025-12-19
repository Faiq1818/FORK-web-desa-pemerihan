import bcrypt from "bcryptjs";
import prisma from "@/libs/prisma";
import { Prisma } from "@/generated/prisma/client";
import * as z from "zod";

// zod type validation
const Player = z.object({
  username: z.string().min(5),
  password: z.string().min(5),
});

export async function POST(req: Request) {
  // get the body and check if there is any body
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { error: "Invalid or missing JSON body" },
      { status: 400 },
    );
  }

  // zod validation
  const result = Player.safeParse(body);
  if (!result.success) {
    return Response.json({
      message: z.treeifyError(result.error),
    });
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(result.data.password, salt);

  // push new user with hashed password to db and its (overkill imo) error handling
  try {
    const users = await prisma.user.create({
      data: { name: result.data.username, password: hash },
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
            { error: "Database error", code: err.code },
            { status: 500 },
          );
      }
    }
  }

  return Response.json({
    result,
  });
}
