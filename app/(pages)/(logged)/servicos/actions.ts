'use server'

import { repositories } from "@/app/data/repositories";
import { serviceRepository } from "@/app/data/repositories/servicing.repository";
import { ListServicesUseCase } from "@/app/data/use-cases/servicing/list-services.usecase";
import { IService } from "@/app/domain/servicing/servicing.models";
import { axiosClient } from "@/app/infrastructure/axios-client/axios-client";

export async function getAllServices() {
  const getAllServicesUseCase = new ListServicesUseCase(repositories.serviceRepository);
  const services = await getAllServicesUseCase.execute();
  return services;
}

export async function createServiceAction(data: FormData) {
  const payload: Omit<IService, 'id'> = {
    name: data.get('name')?.toString() ?? "",
    value: Number(data.get('value')?.toString() ?? 0),
  }

  await serviceRepository(axiosClient).create(payload);
}