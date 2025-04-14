import { ICustomer } from "./customers.models";

export interface ICustomerRepository {
  findAll(): Promise<ICustomer[]>;
  findById(id: string): Promise<ICustomer>;
  findByCPF(cpf: string): Promise<ICustomer>;
  create(customer: Omit<ICustomer, 'id'>): Promise<ICustomer>;
}

export interface IListAllCustomersUseCase {
  execute(): Promise<ICustomer[]>;
}

export interface IFindCustomerByIdUseCase {
  execute(id: string): Promise<ICustomer>;
}

export interface ICreateCustomerUseCase {
  findPreviousCustomer(cpf: string): Promise<boolean>;
  execute(customer: ICustomer): Promise<ICustomer | null>;
}