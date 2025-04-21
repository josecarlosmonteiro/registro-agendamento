import { IService } from "./servicing.models"

export interface IListServicesUseCase {
  execute(): Promise<IService[]>;
}

export interface IListServiceByIdUseCase {
  execute(id: IService['id']): Promise<IService | null>;
}

export interface IServiceRepository {
  findAll(): Promise<IService[]>;
  findById(id: string): Promise<IService | null>;
  findByName(name: string): Promise<IService | null>;
  create(newService: Omit<IService, 'id'>): Promise<IService | null>;
  remove(id: IService['id']): Promise<void>;
}

export interface ICreateServiceUseCase {
  execute(service: Omit<IService, 'id'>): Promise<IService | null>;
}