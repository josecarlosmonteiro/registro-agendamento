import { TApiResponse } from "../api/api.models";
import { ICustomer } from "./customer.models";

export type TCreateCustomerParams = {
  customer: ICustomer;
}

export type TListCustomersService = () => Promise<ICustomer[]>;
export type TCreateCustomerService = (params: TCreateCustomerParams) => TApiResponse<ICustomer>;

export type TCreateCustomerUseCase = (params: TCreateCustomerParams) => Promise<ICustomer | null>;