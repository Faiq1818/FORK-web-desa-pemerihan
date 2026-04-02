import bcrypt from "bcryptjs";
import prisma from "@/libs/prisma";
import { Prisma } from "@/generated/prisma/client";
import jwt from "jsonwebtoken";
import { AUTH_CONFIG } from "@/libs/config/JWTConfig";
import { ErrorStatus } from "@/helpers/httpErrorsHelper";

type loginResult =
  | {
      success: true;
      token: string;
    }
  | {
      success: false;
      message: string;
      error: ErrorStatus;
    };

export async function login(
  username: string,
  userPassword: string,
): Promise<loginResult> {
  let userDb;
  try {
    userDb = await prisma.user.findUnique({
      where: {
        name: username,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
        default:
          return {
            success: false,
            error: "DATABASE_ERROR",
            message: "Database nya error",
          };
      }
    }
  }

  if (!userDb || !userDb.password) {
    return {
      success: false,
      error: "USER_NOT_FOUND",
      message: "Username tidak diketahui",
    };
  }

  const pwMatches = await bcrypt.compare(userPassword, userDb.password);
  if (!pwMatches) {
    return {
      success: false,
      error: "INVALID_PASSWORD",
      message: "Password salah",
    };
  }

  const token = jwt.sign(
    {
      exp:
        Math.floor(Date.now() / AUTH_CONFIG.JWT_EXP_DIVIDER) +
        AUTH_CONFIG.JWT_EXP_TIME,
      data: {
        userId: userDb.id,
        username: userDb.name,
      },
    },
    AUTH_CONFIG.JWT_SECRET,
  );

  return {
    success: true,
    token: token,
  };
}
