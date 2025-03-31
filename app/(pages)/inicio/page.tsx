import { FooterNav } from '@/app/components/UI/FloatingMenu';
import './style.css';

const OptionCard = ({ children }: { children: React.ReactNode }) => (
  <div className='p-4 text-white bg-indigo-500/10 text-center rounded-lg shadow-black'>
    <h2>{children}</h2>
  </div>
)

export default function HomePage() {
  return (
    <main>
      <div className='h-full w-full flex justify-center items-center'>
        <div className='p-8 grid grid-cols-2 gap-4 justify-center items-center'>
          <OptionCard>Clientes</OptionCard>
          <OptionCard>Agendamentos</OptionCard>
          <OptionCard>Funcionários</OptionCard>
          <OptionCard>Serviços</OptionCard>
        </div>
      </div>

      <FooterNav />
    </main>
  )
}