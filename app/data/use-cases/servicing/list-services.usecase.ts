import { IServiceRepository, IListServicesUseCase } from "@/app/domain/servicing/servicing.contracts";
import { IService } from "@/app/domain/servicing/servicing.models";

export class ListServicesUseCase implements IListServicesUseCase {
  constructor(private readonly servicesRepository: IServiceRepository) { }

  async execute(): Promise<IService[]> {
    const response = await this.servicesRepository.findAll();
    return response;
  }
}