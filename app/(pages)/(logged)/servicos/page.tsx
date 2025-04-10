import { CreateService } from "@/app/components/servicing/CreateService";
import { serviceRepository } from "@/app/data/repositories/servicing.repository"
import { axiosClient } from "@/app/infrastructure/axios-client/axios-client"
import { createServiceAction } from "./actions";
import { ServicesList } from "@/app/components/servicing/ServicesList";

export default async function ServicesPage() {
  const allServices = await serviceRepository(axiosClient).findAll();

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1>Serviços</h1>
      <hr />

      <CreateService submitServiceAction={createServiceAction} />

      <ServicesList services={allServices} />
    </div>
  )
}