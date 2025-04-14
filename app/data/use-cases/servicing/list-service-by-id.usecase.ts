import { IServiceRepository } from "@/app/domain/servicing/servicing.contracts";

export class ListServiceByIdUseCase {
  constructor(private readonly serviceRepository: IServiceRepository) { }

  async execute(id: string) {
    const service = await this.serviceRepository.findById(id);
    return service;
  }
}