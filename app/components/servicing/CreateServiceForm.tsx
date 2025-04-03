import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

type Props = {
  submitAction: (data: FormData) => void;
}

export function CreateServiceForm({ submitAction }: Props) {
  return (
    <form action={submitAction}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-xs font-semibold italic text-gray-500">Nome do serviço</label>
          <Input type="text" id="name" name="name" autoComplete="off" placeholder="nome do serviço..." required />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="value" className="text-xs font-semibold italic text-gray-500">Custo do serviço (R$)</label>
          <Input type="number" step={0.01} id="value" name="value" placeholder="R$ 0,00" required />
        </div>

        <Button type="submit" variant="secondary">adicionar</Button>
      </div>
    </form>
  )
}