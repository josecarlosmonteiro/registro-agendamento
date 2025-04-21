'use client';

import { useState } from "react";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { CreateSchedulingForm } from "./CreateSchedulingForm";

type Props = {
  servicesOptions: Array<{ value: string; label: string }>;
  customersOptions: Array<{ value: string; label: string }>;
  onSubmitNewScheduling: (data: FormData) => void;
}

export function CreateScheeduling({
  servicesOptions = [],
  customersOptions = [],
  onSubmitNewScheduling
}: Props) {
  const [showForm, setShowForm] = useState<boolean>(false);

  const closeForm = () => setShowForm(false);
  const openForm = () => setShowForm(true);

  return (
    <div className="flex flex-col gap-4">
      <Button type="button" onClick={openForm}>Novo agendamento</Button>

      <Modal.Root isOpen={showForm}>
        <Modal.Title closeModal={closeForm}>Adicionar agendamento</Modal.Title>

        <Modal.Content>
          <CreateSchedulingForm
            customersOptions={customersOptions}
            servicesOptions={servicesOptions}
            onSubmitNewScheduling={onSubmitNewScheduling}
          />
        </Modal.Content>
      </Modal.Root>
    </div>
  )
}