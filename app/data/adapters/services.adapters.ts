import { IService } from "@/app/domain/servicing/servicing.models"

const toOptionsList = (services: Array<IService>) =>
  services.map(service => ({
    value: service.id,
    label: service.name,
  }))

export const servicesAdapters = {
  toOptionsList,
}