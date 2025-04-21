'use server'

import { CreateCustomerUseCase } from './../../../data/use-cases/customers/create-customer.usecase';

import { repositories } from "@/app/data/repositories";
import { ListAllCustomersUseCase } from '@/app/data/use-cases/customers/list-all-customers.usecase';
import { ICustomer } from "@/app/domain/customers/customers.models";

export async function getAllCustomers() {
  const getCustomersUseCase = new ListAllCustomersUseCase(repositories.customersRepository);
  const customers = await getCustomersUseCase.execute();

  return customers;
}

export async function createCustomerAction(formData: FormData) {
  const payload: Omit<ICustomer, 'id'> = {
    name: formData.get('name')?.toString() ?? "",
    phone: formData.get('phone')?.toString() ?? "",
  }

  const createCustomerUseCase = new CreateCustomerUseCase(repositories.customersRepository);

  await createCustomerUseCase.execute(payload);
}