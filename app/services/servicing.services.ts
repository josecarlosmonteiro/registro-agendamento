import { TCreateService, TListServices } from "../types/servicing/servicing.contracts";
import { api } from "./axios/api";

const url = '/services';

const listServices: TListServices = async () => {
  const { data } = await api.get(url);
  return data;
}

const createService: TCreateService = async (params) => {
  const { data } = await api.post(url, params.newService);
  return data;
}

export const servicingServices = {
  findAll: listServices,
  create: createService,
}