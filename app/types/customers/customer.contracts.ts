import { ICustomer } from "./customer.models";

export type TCreateCustomerParams = {
  customer: ICustomer;
}

export type TListCustomersService = () => Promise<ICustomer[]>;
export type TCreateCustomerService = (params: TCreateCustomerParams) => Promise<ICustomer>;