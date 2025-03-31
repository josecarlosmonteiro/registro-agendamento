export interface ICustomer {
  id?: string;
  name: string;
  document?: string;
  address?: IAddress;
}

export interface IAddress {
  street: string;
  district: string;
  city: number;
  complement: string;
}