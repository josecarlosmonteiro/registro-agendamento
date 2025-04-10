import { IService } from "@/app/domain/servicing/servicing.models"
import { currency } from "@/app/utils/formats";

type Props = {
  services: IService[];
}

export function ServicesList({ services }: Props) {
  if (!services.length) return (
    <div className="text-center font-semibold text-gray-400 italic">
      Ainda não há serviços cadastrados...
    </div>
  )
  return (
    <div className="flex flex-col gap-4">
      {
        services.map(el => (
          <div key={el.id} className="p-2 rounded-lg bg-gray-100">
            <div className="text-gray-600 truncate">{el.name}</div>
            <div className="text-sm font-light text-primary-light">{currency(el.value)}</div>
          </div>
        ))
      }
    </div>
  )
}