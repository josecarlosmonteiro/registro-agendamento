import { IHttpClient } from "@/app/infrastructure/httpClient";
import { IServiceRepository } from "@/app/domain/servicing/servicing.contracts";
import { IService } from "@/app/domain/servicing/servicing.models";

export class ServicingRepository implements IServiceRepository {
  constructor(private readonly httpClient: IHttpClient) { }

  async findByName(name: string): Promise<IService | null> {
    const response = await this.httpClient.request('GET', `/services?name=${name}`);
    return response.data;
  }

  async findAll(): Promise<IService[]> {
    const response = await this.httpClient.request('GET', '/services');
    return response.data;
  }

  async findById(id: string): Promise<IService | null> {
    const response = await this.httpClient.request('GET', `/services/${id}`);
    return response.data;
  }

  async create(data: Omit<IService, 'id'>) {
    const response = await this.httpClient.request('POST', '/services', data);
    return response.data;
  }
}

export const serviceRepository = (api: IHttpClient) => new ServicingRepository(api);