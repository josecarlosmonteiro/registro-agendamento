import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Select } from "../UI/Select";

type Props = {
  servicesOptions: Array<{ value: string; label: string }>;
  customersOptions: Array<{ value: string; label: string }>;
  onSubmitNewScheduling: (data: FormData) => void;
}

export function CreateSchedulingForm({
  servicesOptions = [],
  customersOptions = [],
  onSubmitNewScheduling
}: Props) {
  return (
    <form action={onSubmitNewScheduling}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="serviceId" className="text-xs font-semibold italic text-gray-500">Serviço</label>
          <Select name="serviceId" id="serviceId" required>
            <option value=""></option>
            {
              servicesOptions.map(service => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))
            }
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="customerId" className="text-xs font-semibold italic text-gray-500">Cliente</label>
          <Select name="customerId" id="customerId" required>
            <option value=""></option>
            {
              customersOptions.map(customer => (
                <option key={customer.value} value={customer.value}>
                  {customer.label}
                </option>
              ))
            }
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="date" className="text-xs font-semibold italic text-gray-500">Dia e horário</label>
          <Input type="datetime-local" name="date" id="date" required />
        </div>

        <Button type="submit">Confirmar</Button>
      </div>
    </form>
  )
}