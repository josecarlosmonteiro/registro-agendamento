export interface ICustomer {
  id: string;
  cpf?: string;
  name: string;
  phone: string;
  address?: IAddress;
}

export interface IAddress {
  street: string;
  city: string;
  zipCode: string;
  complement?: string;
}