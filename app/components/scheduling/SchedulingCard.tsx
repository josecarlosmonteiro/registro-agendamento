export function SchedulingCard() {
  return (
    <div className="p-2 flex flex-col gap-2 rounded bg-gray-100 text-violet-500 shadow">
      <div className="px-2 flex justify-between items-center">
        <h2 className="font-semibold">[Nome do Cliente]</h2>
        <span>00:00</span>
      </div>

      <div className="px-2 text-sm truncate text-gray-500">
        <div>Serviço: [NOME DO SERVIÇO]</div>
        <div>Profissional: [NOME DO PROFISSIONAL]</div>
      </div>
    </div>
  )
}