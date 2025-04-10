import { ICustomer } from "@/app/domain/customers/customers.models"

type Props = {
  customersList: ICustomer[];
}

export function CustomersList({ customersList }: Props) {
  return (
    <div className="p-2 flex flex-col gap-2">
      {
        customersList.map(customer => (
          <div key={customer.id} className="p-2 rounded shadow bg-gray-100">
            <div className="text-lg font-semibold text-primary">{customer.name}</div>
            <div className="text-sm text-gray-500 italic">{customer.phone}</div>
          </div>
        ))
      }
    </div>
  )
}