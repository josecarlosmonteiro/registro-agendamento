import { customersServices } from "@/app/services/customer.services";
import { TCreateCustomerUseCase } from "@/app/types/customers/customer.contracts";

export const createCustomerUseCase: TCreateCustomerUseCase = async ({ customer }) => {
  try {
    if (!customer.name)
      throw new Error("Por favor, informe o nome do cliente.");

    const response = await customersServices.create({ customer });

    if (!response.success)
      throw new Error(response.message);

    return response.content;
  } catch (error) {
    return null;
  }
}