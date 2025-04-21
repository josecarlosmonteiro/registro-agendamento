import { TDetailedScheduling, TScheduling } from "./scheduling.models";

export interface ISchedulingRepository {
  findAll(): Promise<TScheduling[]>;
  findById(id: string): Promise<TScheduling | null>;
  findByDate(date: string): Promise<TScheduling | null>;
  create(scheduling: Omit<TScheduling, 'id'>): Promise<TScheduling>;
}

export interface IListSchedulesUseCase {
  getServiceName(serviceId?: string): Promise<string | null>;
  getCustomerName(customerId: string): Promise<string>;
  toPopulate(scheduling: TScheduling): Promise<TDetailedScheduling>;
  execute(): Promise<TDetailedScheduling[]>;
}

export interface IListTodaySchedulesUseCase {
  execute(): Promise<TDetailedScheduling[]>;
}

export interface ICreateScheduleUseCase {
  checkAvailability(date: string): Promise<boolean>;
  execute(scheduling: Omit<TScheduling, 'id'>): Promise<TDetailedScheduling | null>;
}