import bcrypt from "bcryptjs";
import prisma from "@/libs/prisma";
import * as z from "zod";

// zod type validation
const fromRequest = z.object({
  username: z.string().min(5),
  password: z.string().min(5),
  newPassword: z.string().min(5),
});

export async function PUT(req: Request) {
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
  const result = fromRequest.safeParse(body);
  if (!result.success) {
    return Response.json({
      message: z.treeifyError(result.error),
    });
  }

  // query to db to get the user row
  let user;
  try {
    user = await prisma.user.findUnique({
      where: {
        name: result.data.username,
      },
    });

    // handle password or username is valid or not
    if (!user || !user.password) {
      return Response.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }
  } catch (err) {
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 });
  }

  // compare the password of user request with the hash in the db in the same user
  const checkPassword = await bcrypt.compare(result.data.password, user.password); //bool
  if (checkPassword === false) {
    return Response.json(
      { error: "Password salah" },
      { status: 401 }
    );
  }
  console.log(user)

  try {
    await prisma.user.update({
      where: {
        name: result.data.username,
      },
      data: {
        password: result.data.newPassword,
      },
    })
  } catch {
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 });
  }


  return Response.json({
    message: "Password berhasil diubah.",
  });
}
