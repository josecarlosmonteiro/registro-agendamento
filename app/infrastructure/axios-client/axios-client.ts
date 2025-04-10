import { IHttpClient, THttpMethod } from "@/app/infrastructure/httpClient";
import axios from "axios";

class AxiosClient implements IHttpClient {
  async request(method: THttpMethod, url: string, body?: any) {
    try {
      const { data } = await axios.request({
        method,
        url,
        data: body,
        baseURL: 'http://localhost:5050',
      });

      return { data };
    } catch (error: any) {
      return {
        data: null,
        notification: error.message,
      }
    }
  }
}

export const axiosClient = new AxiosClient();
