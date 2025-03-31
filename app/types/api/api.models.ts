export type TApiResponse<T> = Promise<{
  success: boolean;
  content: T;
  message?: string;
}>