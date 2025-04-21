export type THttpResponse<T = any> = {
  data: T;
  notification?: string;
};

export type THttpMethod = 'GET' | 'POST' | "DELETE";

export interface IHttpClient<T = any> {
  request(method: THttpMethod, url: string, body?: any): Promise<THttpResponse<T>>;
}