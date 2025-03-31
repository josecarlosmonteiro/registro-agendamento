import { SchedulingCard } from "@/app/components/scheduling/SchedulingCard";

export default function HomePage() {
  return (
    <main>
      <div className="p-4 pt-6 flex flex-col gap-4 bg-violet-900 text-white">
        <h1 className="text-lg font-semibold">Agenda de hoje</h1>

        <div className="flex flex-col gap-2">
          <SchedulingCard />
          <SchedulingCard />
          <SchedulingCard />
          <SchedulingCard />
        </div>
      </div>
    </main>
  )
}