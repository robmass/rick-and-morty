import type { Info } from "src/types/info";

export type ApiResponse<T> = {
  info: Info;
  results: T;
};

export type JSONResponse<T> = {
  results?: T[];
  error?: string;
};
