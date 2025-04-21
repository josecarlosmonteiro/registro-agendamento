import { ICustomer } from "../customers/customers.models";

export type TScheduling = {
  id: string;
  date: string;
  status: ESchedulingStatus;
  customerId: string;
  serviceId?: string;
  professionalId?: string;
}

export type TDetailedScheduling = TScheduling & {
  customerName: string;
  serviceName?: string;
}

export enum ESchedulingStatus {
  NEW = 1,
  CONFIRMED = 2,
  DONE = 3,
  CANCELED = 4
}