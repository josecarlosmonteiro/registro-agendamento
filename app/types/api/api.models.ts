import { Method } from "axios";

export type TApiResponse<T = any> = Promise<{
  success: boolean;
  content: T;
  message?: string;
}>;

export type THttpClient = (url: string, method: Method, params?: any) => TApiResponse;