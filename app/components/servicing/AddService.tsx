'use client'

import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { useModal } from "../UI/Modal/useModal";
import { NewServiceForm } from "./NewServiceForm";

type Props = {
  submitService: (data: FormData) => void;
}

export function AddService({ submitService }: Props) {
  const { modalIs, changeModal, closeModal } = useModal({
    CLOSED: 0,
    ADD_SERVICE: 1,
  })

  return (
    <>
      <Button
        type="button"
        onClick={() => changeModal('ADD_SERVICE')}
      >
        Adicionar
      </Button>

      <Modal.Root isOpen={modalIs('ADD_SERVICE')}>
        <Modal.Title closeModal={closeModal}>
          Adicionar serviço
        </Modal.Title>

        <Modal.Content>
          <NewServiceForm submitNewService={submitService} />
        </Modal.Content>
      </Modal.Root>
    </>
  )
}