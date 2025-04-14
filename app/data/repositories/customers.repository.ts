import { ICustomerRepository } from "@/app/domain/customers/customers.contracts";
import { ICustomer } from "@/app/domain/customers/customers.models";
import { IHttpClient } from "@/app/infrastructure/httpClient";

export class CustomersRepository implements ICustomerRepository {
  constructor(private readonly httpClient: IHttpClient) { }

  async findAll(): Promise<ICustomer[]> {
    const response = await this.httpClient.request('GET', '/customers');
    return response.data;
  }

  async findById(id: string): Promise<ICustomer> {
    const response = await this.httpClient.request('GET', `/customers/${id}`);
    return response.data;
  }

  async findByCPF(cpf: string): Promise<ICustomer> {
    const response = await this.httpClient.request('GET', `/customers?cpf=${cpf}`);
    return response.data;
  }

  async create(customer: ICustomer): Promise<ICustomer> {
    const response = await this.httpClient.request('POST', '/customers', customer);
    return response.data;
  }
}

export const customersRepository = (httpClient: IHttpClient) => new CustomersRepository(httpClient);