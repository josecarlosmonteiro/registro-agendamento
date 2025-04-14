import { ICreateServiceUseCase, IServiceRepository } from "@/app/domain/servicing/servicing.contracts";
import { IService } from "@/app/domain/servicing/servicing.models";

export class CreateServiceUseCase implements ICreateServiceUseCase {
  constructor(private readonly serviceRepository: IServiceRepository) { }

  async execute(service: Omit<IService, "id">) {
    const previous = await this.serviceRepository.findByName(service.name);

    if (previous) throw new Error("O serviço já existe");

    const createdService = await this.serviceRepository.create(service);
    return createdService;
  }
}