export type ErrorStatus =
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "DATABASE_ERROR"
  | "VALIDATION_ERROR"
  | "UNKNOWN_ERROR";

type HttpErrorConfig = {
  statusCode: number;
};

export const ERROR_STATUS_CODE_MAPPER: Record<ErrorStatus, HttpErrorConfig> = {
  USER_NOT_FOUND: {
    statusCode: 401,
  },
  INVALID_PASSWORD: {
    statusCode: 401,
  },
  DATABASE_ERROR: {
    statusCode: 500,
  },
  VALIDATION_ERROR: {
    statusCode: 400,
  },
  UNKNOWN_ERROR: {
    statusCode: 500,
  },
};
