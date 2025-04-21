import { IServiceRepository } from '@/app/domain/servicing/servicing.contracts';
import { IListSchedulesUseCase, ISchedulingRepository } from "@/app/domain/scheduling/scheduling.contracts";
import { ICustomerRepository } from '@/app/domain/customers/customers.contracts';
import { TScheduling, TDetailedScheduling } from '@/app/domain/scheduling/scheduling.models';

export class ListAllSchedulesUseCase implements IListSchedulesUseCase {
  constructor(
    private readonly schedulesRepository: ISchedulingRepository,
    private readonly serviceRepository: IServiceRepository,
    private readonly customerRepository: ICustomerRepository,
  ) { }

  async getServiceName(serviceId?: string): Promise<string | null> {
    if (!serviceId) return null;

    const response = await this.serviceRepository.findById(serviceId);

    if (!response) throw new Error("Serviço não encontrado");

    return response.name;
  }

  async getCustomerName(customerId: string): Promise<string> {
    const response = await this.customerRepository.findById(customerId);

    if (!response) throw new Error("Cliente não encontrado");

    return response.name;
  }

  async toPopulate(scheduling: TScheduling): Promise<TDetailedScheduling> {
    console.log("🚀 ~ ListAllSchedulesUseCase ~ toPopulate ~ scheduling:", scheduling);
    const serviceName = await this.getServiceName(scheduling.serviceId);
    const customerName = await this.getCustomerName(scheduling.customerId);

    return {
      ...scheduling,
      serviceName: serviceName || undefined,
      customerName,
    };
  }

  async execute() {
    const response = await this.schedulesRepository.findAll();
    const schedules = await Promise.all(response.map(async (schedule) => this.toPopulate(schedule)));

    return schedules;
  }
}