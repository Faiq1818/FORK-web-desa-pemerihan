import bcrypt from "bcryptjs";
import prisma from "@/libs/prisma";
import * as z from "zod";

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
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(result.data.password, salt);

  // push new user with hashed password to db
  const users = await prisma.user.create({
    data: { name: result.data.username, password: hash },
  });

  return Response.json({
    users,
    result,
  });
}
