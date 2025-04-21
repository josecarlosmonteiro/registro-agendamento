'use server'

import { repositories } from "@/app/data/repositories"
import { ListAllSchedulesUseCase } from "@/app/data/use-cases/schedules/list-all-schedules.usecase";
import { ESchedulingStatus, TScheduling } from "@/app/domain/scheduling/scheduling.models";

export async function getAllSchedules() {
  const getAllSchedulesUseCase = new ListAllSchedulesUseCase(
    repositories.scheduleRepository,
    repositories.serviceRepository,
    repositories.customersRepository,
  );
  const schedules = await getAllSchedulesUseCase.execute();

  return schedules;
}

export async function createScheduling(data: FormData) {
  const payload: Omit<TScheduling, 'id'> = {
    date: data.get('date') as string,
    status: ESchedulingStatus.NEW,
    customerId: data.get('customerId') as string,
    serviceId: data.get('serviceId') as string,
  }

  if (!payload.date || !payload.customerId || !payload.serviceId) {
    throw new Error('Dados inváidos');
  }

  await repositories.scheduleRepository.create(payload);
}