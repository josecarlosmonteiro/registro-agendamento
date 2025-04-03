'use service';

import { servicingServices } from '@/app/services/servicing.services';

export const fetchServices = async () => {
  const response = await servicingServices.findAll();
  return response;
}

export const createService = async (data: FormData) => {
  const name = data.get('name')?.toString() ?? "";
  const value = Number(data.get('value') || 0);

  if (!name || !value) throw new Error("Por favor, informe todos os parâmetros.");

  const response = await servicingServices.create({ newService: { name, value } });

  return response;
}