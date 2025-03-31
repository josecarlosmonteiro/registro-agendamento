import { TCreateCustomerService, TListCustomersService } from "../types/customers/customer.contracts";

const listAllCustomers: TListCustomersService = async () => {
  return [
    { id: 'cliente1', name: 'cliente 1' },
    { id: 'cliente2', name: 'cliente 2' },
  ]
}

const createCustomer: TCreateCustomerService = async (params) => {
  console.log(params);

  return {
    content: {
      ...params.customer,
      id: 'id-criado-agora',
    },
    success: true,
  };
}

export const customersServices = {
  findAll: listAllCustomers,
  create: createCustomer,
}