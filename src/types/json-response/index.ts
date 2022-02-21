import type { Info } from '@/types/info';

export type JSONResponse<T> = {
  info?: Info;
  results?: T[];
  error?: string;
};
