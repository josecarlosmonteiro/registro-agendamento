'use client'

import { useState } from "react";
import "./style.css";

export function FooterNav() {
  const [showMenuOptions, setShowMenuOptions] = useState<boolean>(true);

  return (
    <div className="fixed w-full bottom-0 right-4">
      <button
        type="button"
        onClick={() => setShowMenuOptions(state => !state)}
        className={`z-10 w-14 h-14 absolute bottom-4 right-4 flex justify-center items-center text-white rounded-full duration-300 ${showMenuOptions ? 'bg-indigo-600' : 'bg-indigo-900'}`}
      >
        Menu
      </button>

      {
        showMenuOptions &&
        <div className="h-screen w-full fixed top-0 left-0 backdrop-blur flex justify-center items-center fade-in-background-menu">
          <div className="fade-in-menu p-4 rounded bg-black/30 text-white bottom-24 right-8 flex flex-col gap-4 items-end">
            <div className="w-fit p-2 px-4 rounded-lg bg-indigo-800 text-end">
              agendamentos
            </div>
            <div className="w-fit p-2 px-4 rounded-lg bg-indigo-800 text-end">
              clientes
            </div>
            <div className="w-fit p-2 px-4 rounded-lg bg-indigo-800 text-end">
              serviços
            </div>
            <div className="w-fit p-2 px-4 rounded-lg bg-indigo-800 text-end">
              funcionários
            </div>
          </div>
        </div>
      }
    </div>
  )
}