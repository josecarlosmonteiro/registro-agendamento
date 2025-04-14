import { Button } from "../Button";

type Props = {
  closeModal: VoidFunction;
  children?: React.ReactNode;
}

export function ModalTitle({ closeModal, children }: Props) {
  return (
    <div className="w-full pb-2 flex justify-between items-center gap-10 border-b border-gray-300">
      <h2 className="text-primary-light truncate">{children}</h2>

      <Button type="button" onClick={closeModal}>fechar</Button>
    </div>
  )
}