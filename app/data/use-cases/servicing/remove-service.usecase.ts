export class RemoveServiceUseCase {
  constructor(private readonly serviceRepository: any) { }

  async execute(id: string): Promise<void> {
    const service = await this.serviceRepository.findById(id);
    if (!service) throw new Error("Serviço não encontrado");

    await this.serviceRepository.remove(id);
  }
}