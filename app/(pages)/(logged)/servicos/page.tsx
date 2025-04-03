import { createService, fetchServices } from "./actions"
import { CreateService } from "@/app/components/servicing/CreateService";
import { ServicesList } from "@/app/components/servicing/ServicesList";
import { Suspense } from "react";

export default async function ServicesPage() {
  const serviceListData = await fetchServices();

  const onCreateService = async (data: FormData) => {
    'use server'
    await createService(data);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center bg-primary">
        <h1 className="p-4 text-xl font-extralight text-white">Seus Serviços</h1>
        <CreateService submitServiceAction={onCreateService} />
      </div>

      <div className="p-4">
        <Suspense fallback={<div className="w-full text-center font-semibold text-gray-400 text-sm">Carregando lista de serviços...</div>}>
          <ServicesList services={serviceListData} />
        </Suspense>
      </div>
    </div>
  )
}