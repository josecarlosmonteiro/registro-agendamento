import { ICustomerRepository, IListAllCustomersUseCase } from "@/app/domain/customers/customers.contracts";
import { ICustomer } from "@/app/domain/customers/customers.models";

export class ListAllCustomersUseCase implements IListAllCustomersUseCase {
  constructor(private readonly customersRepository: ICustomerRepository) { }

  async execute(): Promise<ICustomer[]> {
    try {
      const response = await this.customersRepository.findAll();
      return response;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}