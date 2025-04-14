import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

type Props = {
  createCustomerAction: (payload: FormData) => void;
}

export function CreateCustomerForm({ createCustomerAction }: Props) {
  return (
    <form action={createCustomerAction}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-xs font-semibold italic text-gray-500">Nome</label>
          <Input type="text" id="name" name="name" autoComplete="off" placeholder="Nome do Cliente" required />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-xs font-semibold italic text-gray-500">Telefone</label>
          <Input type="text" id="phone" name="phone" placeholder="(81)900001111" required />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="cpf" className="text-xs font-semibold italic text-gray-500">CPF</label>
          <Input type="text" id="cpf" name="cpf" placeholder="00011122233" />
        </div>

        <Button type="submit" variant="secondary">adicionar</Button>
      </div>
    </form>
  )
}