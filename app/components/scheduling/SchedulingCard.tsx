import { TDetailedScheduling, TScheduling } from "@/app/domain/scheduling/scheduling.models"
import { localeDate } from "@/app/utils/formats";

type Props = {
  scheduling: TDetailedScheduling;
}

export function SchedulingCard({ scheduling }: Props) {
  return (
    <div className="p-4 rounded-lg shadow bg-gray-100">
      <h2 className="text-xl text-primary-light">{scheduling.customerName}</h2>

      <div className="flex justify-between items-center">
        <div>{scheduling.serviceName}</div>
        <div className="text-sm">{localeDate(scheduling.date)}</div>
      </div>
    </div>
  )
}