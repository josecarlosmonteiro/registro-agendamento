import { ServicesList } from "@/app/components/servicing/ServicesList";
import { createNewService, getServices } from "./actions";
import { AddService } from "@/app/components/servicing/AddService";

export default async function ServicePage() {
  const servicesData = await getServices();

  return (
    <main>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Serviços ofertados</h1>
        <AddService submitService={createNewService} />
      </div>
      <br />

      <ServicesList services={servicesData} />
    </main>
  )
}