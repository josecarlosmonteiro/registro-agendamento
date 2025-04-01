import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

type Props = {
  submitNewService: (data: FormData) => void;
}

export function NewServiceForm({ submitNewService }: Props) {
  return (
    <form action={submitNewService}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-indigo-700 italic text-sm font-medium">
            Nome do serviço
          </label>
          <Input id="name" name="name" placeholder="serviço..." />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="value" className="text-indigo-700 italic text-sm font-medium">
            Valor (R$)
          </label>
          <Input id="value" type="number" step={0.01} name="value" placeholder="Valor R$..." />
        </div>

        <Button type="submit">
          Adicionar
        </Button>
      </div>
    </form>
  )
}