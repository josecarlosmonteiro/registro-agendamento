export default function HomePage() {
  return (
    <main>
      <div className="p-4 pt-6 flex flex-col gap-4 bg-violet-900 text-white">
        <h1 className="text-lg">Agendamentos de hoje</h1>

        <div className="p-2 flex flex-col gap-2 rounded bg-gray-100 text-violet-500 shadow">
          <div className="px-2 flex justify-between items-center">
            <h2 className="font-semibold">[Nome do Cliente]</h2>
            <span>00:00</span>
          </div>

          <div className="px-2 text-sm truncate text-gray-500">
            <div>Profissional: [NOME DO PROFISSIONAL]</div>
            <div>Serviço: [NOME DO SERVIÇO]</div>
          </div>
        </div>
      </div>
    </main>
  )
}