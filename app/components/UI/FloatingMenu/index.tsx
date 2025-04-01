'use client'

import { useState } from "react";
import "./style.css";
import Link from "next/link";

const FloatingLink = ({ href, onClick, children }: { href: string | URL, onClick: VoidFunction, children: React.ReactNode }) => (
  <Link href={href} onClick={onClick}>
    <div className="p-2 px-4 rounded-lg bg-indigo-800">
      {children}
    </div>
  </Link>
)

export function FloatingMenu() {
  const [showMenuOptions, setShowMenuOptions] = useState<boolean>(false);

  const closeMenu = () => setShowMenuOptions(false);

  return (
    <div className="fixed w-full bottom-0 right-4">
      <button
        type="button"
        onClick={() => setShowMenuOptions(state => !state)}
        className={`z-10 w-14 h-14 absolute bottom-4 right-4 flex justify-center items-center text-white font-semibold rounded-full duration-300 ${showMenuOptions ? 'bg-indigo-600' : 'bg-indigo-900'}`}
      >
        Menu
      </button>

      {
        showMenuOptions &&
        <div className="h-screen w-full fixed top-0 left-0 backdrop-blur flex justify-center items-center fade-in-background-menu">
          <div className="fade-in-menu p-4 rounded bg-black/30 text-white bottom-24 right-8 flex flex-col gap-4">
            <FloatingLink
              href="inicio"
              onClick={closeMenu}
            >
              Início
            </FloatingLink>
            <FloatingLink
              href="servicos"
              onClick={closeMenu}
            >
              Serviços
            </FloatingLink>
          </div>
        </div>
      }
    </div>
  )
}