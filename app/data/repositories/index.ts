import { axiosClient } from "@/app/infrastructure/axios-client/axios-client";
import { serviceRepository } from "./servicing.repository";
import { customersRepository } from "./customers.repository";
import { scheduleRepository } from "./schedlues.repository";

export const repositories = {
  serviceRepository: serviceRepository(axiosClient),
  customersRepository: customersRepository(axiosClient),
  scheduleRepository: scheduleRepository(axiosClient),
}