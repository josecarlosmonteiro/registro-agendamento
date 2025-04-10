'use client'

import { useState } from "react";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { CreateCustomerForm } from "./CreateCustomerForm";

type Props = {
  createCustomerAction: (payload: FormData) => void;
}

export function CreateCustomer({ createCustomerAction }: Props) {
  const [showForm, setShowForm] = useState<boolean>(false);

  const closeModal = () => setShowForm(false);
  const onCreateCustomer = (data: FormData) => {
    createCustomerAction(data);
    closeModal();
  }

  return (
    <div className="flex flex-col">
      <Button type="button" onClick={() => setShowForm(true)}>Cadastrar cliente</Button>

      <Modal.Root isOpen={showForm}>
        <Modal.Title closeModal={closeModal}>
          Novo cliente
        </Modal.Title>

        <Modal.Content>
          <CreateCustomerForm createCustomerAction={onCreateCustomer} />
        </Modal.Content>
      </Modal.Root>
    </div>
  )
}