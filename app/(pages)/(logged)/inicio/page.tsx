import { FloatingNavigation } from "@/app/components/UI/FloatingNavigation";
import { createScheduling, getAllSchedules } from "./actions";
import { CreateScheeduling } from "@/app/components/scheduling/CreateScheduling";
import { getAllCustomers } from "../clientes/actions";
import { customersAdapters } from "@/app/data/adapters/customers.adapters";
import { getAllServices } from "../servicos/actions";
import { servicesAdapters } from "@/app/data/adapters/services.adapters";
import { SchedulingList } from "@/app/components/scheduling/SchedulingList";

export default async function HomePage() {
  const [services, customers, schedules] = await Promise.all([
    getAllServices(),
    getAllCustomers(),
    getAllSchedules(),
  ]);

  return (
    <main className="p-4">
      <h2 className="text-lg">Sua agenda</h2>
      <hr /><br />

      <CreateScheeduling
        servicesOptions={servicesAdapters.toOptionsList(services)}
        customersOptions={customersAdapters.toOptionsList(customers)}
        onSubmitNewScheduling={createScheduling}
      />

      <div className="mt-4 flex flex-col gap-4">
        <SchedulingList schedulings={schedules} />
      </div>

      <FloatingNavigation />
    </main>
  )
}