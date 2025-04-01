import { IService } from "@/app/types/servicing/servicing.models"
import { currency } from "@/app/utils/formats/currency";
import { ServiceCard } from "./ServiceCard";

type Props = {
  services: IService[];
}

const EmptyList = () => (
  <div className="p-4 rounded-lg bg-white/10 text-gray-400 text-center">
    Adicione os serviços que você oferta.
  </div>
)

export function ServicesList({ services }: Props) {
  if (!services.length)
    return <EmptyList />

  return (
    <div className="grid grid-cols-2 gap-4">
      {
        services.map(serv => <ServiceCard key={serv.id} service={serv} />)
      }
    </div>
  )
}