'use client';

import { useState } from "react";

type TModalMap<T> = Record<keyof T | "CLOSED", number>;

export function useModal<T>(modalMap: TModalMap<T>) {
  const [currentModal, setCurrentModal] = useState<number>(modalMap['CLOSED']);

  const modalIs = (modal: keyof T) => currentModal === modalMap[modal];
  const changeModal = (modal: keyof T) => setCurrentModal(modalMap[modal]);
  const closeModal = () => setCurrentModal(modalMap['CLOSED']);

  return {
    modalIs,
    changeModal,
    closeModal,
  }
}