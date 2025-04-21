'use client'

import { IService } from "@/app/domain/servicing/servicing.models"
import { currency } from "@/app/utils/formats";

type Props = {
  services: IService[];
  removeService: (serviceId: string) => void;
}

export function ServicesList({ services, removeService }: Props) {
  if (!services.length) return (
    <div className="text-center font-semibold text-gray-400 italic">
      Ainda não há serviços cadastrados...
    </div>
  )
  return (
    <div className="flex flex-col gap-4">
      {
        services.map(el => (
          <div key={el.id} className="p-2 rounded-lg bg-gray-100 flex justify-between items-center">
            <div>
              <div className="text-gray-600 truncate">{el.name}</div>
              <div className="text-sm font-light text-primary-light">{currency(el.value)}</div>
            </div>

            <button
              type="button"
              className="p-1 px-2 bg-red-100 text-red-600 rounded-lg shadow"
              onClick={() => removeService(el.id)}
            >
              remover
            </button>
          </div>
        ))
      }
    </div>
  )
}