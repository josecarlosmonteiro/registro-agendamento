'use client'

import React, { useState } from "react";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { CreateServiceForm } from "./CreateServiceForm";

type Props = {
  submitServiceAction: (data: FormData) => void;
}

export function CreateService({ submitServiceAction }: Props) {
  const [showForm, setShowForm] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    submitServiceAction(data);
    setShowForm(false);
  }

  return (
    <div className="flex flex-col">
      <Button type="button" onClick={() => setShowForm(true)}>
        Adicionar serviço
      </Button>

      <Modal.Root isOpen={showForm}>
        <Modal.Title closeModal={() => setShowForm(false)}>
          Adicionar serviço
        </Modal.Title>

        <Modal.Content>
          <CreateServiceForm submitAction={onSubmit} />
        </Modal.Content>
      </Modal.Root>
    </div>
  )
}