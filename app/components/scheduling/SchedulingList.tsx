import { TDetailedScheduling } from "@/app/domain/scheduling/scheduling.models";
import { SchedulingCard } from "./SchedulingCard";

type Props = {
  schedulings: Array<TDetailedScheduling>;
}

export function SchedulingList({ schedulings }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {
        schedulings.map(scheduling => (
          <SchedulingCard key={scheduling.id} scheduling={scheduling} />
        ))
      }
    </div>
  )
}