'use server'

import { serviceRepository } from "@/app/data/repositories/servicing.repository";
import { IService } from "@/app/domain/servicing/servicing.models";
import { axiosClient } from "@/app/infrastructure/axios-client/axios-client";

export async function createServiceAction(data: FormData) {
  const payload: Omit<IService, 'id'> = {
    name: data.get('name')?.toString() ?? "",
    value: Number(data.get('value')?.toString() ?? 0),
  }

  await serviceRepository(axiosClient).create(payload);
}