import { ICreateCustomerUseCase, ICustomerRepository } from "@/app/domain/customers/customers.contracts";
import { ICustomer } from "@/app/domain/customers/customers.models";

export class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(private readonly customersRepository: ICustomerRepository) { }

  async findPreviousCustomer(cpf: string): Promise<boolean> {
    try {
      const response = await this.customersRepository.findByCPF(cpf);
      return !!response;
    } catch (error: any) {
      throw Error(error.message);
    }
  }

  async execute(customer: Omit<ICustomer, 'id'>): Promise<ICustomer | null> {
    try {
      if (customer.cpf) {
        const previous = await this.findPreviousCustomer(customer.cpf);
        if (previous) throw new Error("Cliente já cadastrado!");
      }

      const response = await this.customersRepository.create(customer);
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}