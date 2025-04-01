'use server';

import { QUERY_KEYS } from "@/app/constants/API";
import { servicingServices } from "@/app/services/servicing.services";
import { revalidateTag } from "next/cache";

export async function getServices() {
  try {
    const response = await servicingServices.findAll();

    if (!response.success)
      throw new Error(response.message);

    return response.content;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
}

export async function createNewService(formData: FormData) {
  const name = formData.get('name')?.toString();
  const value = Number(formData.get('value') ?? 0);

  if (!name?.trim() || !value) throw Error("Preencha todos os campos.");

  try {
    const response = await servicingServices.create({ name, value });

    if (!response.success) throw new Error(response.message);

    revalidateTag(QUERY_KEYS.servicing);
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}