import { IService } from "@/app/types/servicing/servicing.models"
import { currency } from "@/app/utils/formats/currency";

type Props = {
  service: IService;
}

export function ServiceCard({ service }: Props) {
  return (
    <div className="p-4 rounded-lg bg-indigo-950">
      <div className="text-sm truncate">{service.name}</div>
      <div className="text-sm font-semibold text-indigo-200">{currency(service.value)}</div>
    </div>
  )
}