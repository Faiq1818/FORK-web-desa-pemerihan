import bcrypt from "bcryptjs";
import { ErrorStatus } from "@/helpers/httpErrorsHelper";
import { findUniqueUserByName } from "@/repository/authRepository";
import { JWTSign } from "@/helpers/jwtHelper";

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
  // checking if the user is in the db or not
  const userDb = await findUniqueUserByName(username);
  if (!userDb || !userDb.password) {
    return {
      success: false,
      error: "USER_NOT_FOUND",
      message: "Username not found",
    };
  }

  // Comparing password from user request body to
  // password stored in the db using bcrypt library
  const pwMatches = await bcrypt.compare(userPassword, userDb.password);
  if (!pwMatches) {
    return {
      success: false,
      error: "INVALID_PASSWORD",
      message: "Incorrect password",
    };
  }

  const token = JWTSign(userDb.id, userDb.name);

  return {
    success: true,
    token: token,
  };
}
