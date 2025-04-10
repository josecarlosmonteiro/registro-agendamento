import { CreateCustomer } from "@/app/components/customers/CreateCustomer";
import { CustomersList } from "@/app/components/customers/CustomersList";
import { customersRepository } from "@/app/data/repositories/customers.repository";
import { ListAllCustomersUseCase } from "@/app/data/use-cases/customers/list-all-customers.usecase";
import { axiosClient } from "@/app/infrastructure/axios-client/axios-client";
import { createCustomerAction } from "./actions";

export default async function CustomersPage() {
  const allCustomers = await new ListAllCustomersUseCase(
    customersRepository(axiosClient)
  ).execute();

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Clientes</h1>
      <hr />
      <CreateCustomer createCustomerAction={createCustomerAction} />
      <CustomersList customersList={allCustomers} />
    </div>
  )
}