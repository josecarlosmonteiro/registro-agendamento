import { ICustomer } from "@/app/domain/customers/customers.models"

const toOptionsList = (customersList: Array<ICustomer>) =>
  customersList.map(customer => ({ value: customer.id, label: customer.name }));

export const customersAdapters = {
  toOptionsList,
}