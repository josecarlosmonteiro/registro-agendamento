import { QUERY_KEYS } from './../constants/API';
import { TCreateService, TListServices } from "../types/servicing/servicing.contracts";
import { client } from "./api/client";
import { IService } from '../types/servicing/servicing.models';

const baseUrl = "http://localhost:5050/services";

const listService: TListServices = async () => {
  const response = await fetch(baseUrl, {
    next: { tags: [QUERY_KEYS.servicing] }
  });

  const data = response.json();

  return {
    content: data as unknown as IService[],
    success: true,
  }
}

const createService: TCreateService = async (params) => {
  const response = await client.post(baseUrl, params);
  return response;
};

export const servicingServices = {
  findAll: listService,
  create: createService,
}