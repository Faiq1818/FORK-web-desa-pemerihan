import jwt from "jsonwebtoken";
import { AUTH_CONFIG } from "@/libs/config/JWTConfig";

export function JWTSign(userId: number, username: string) {
  return jwt.sign(
    {
      exp:
        Math.floor(Date.now() / AUTH_CONFIG.JWT_EXP_DIVIDER) +
        AUTH_CONFIG.JWT_EXP_TIME,
      data: {
        userId: userId,
        username: username,
      },
    },
    AUTH_CONFIG.JWT_SECRET,
  );
}
