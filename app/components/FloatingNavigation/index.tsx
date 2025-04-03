'use client';

import { useState } from "react";
import Link from "next/link";
import './index.css';

const FloatingLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href}>
      <div className="p-2 px-4 bg-primary-light text-white rounded-lg shadow">
        {children}
      </div>
    </Link>
  )
}

const floatingLinks: Array<{ href: string; label: string }> = [
  { href: '/inicio', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
];

export function FloatingNavigation() {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  return (
    <div className="fixed flex flex-col gap-4 items-end bottom-4 right-4 z-10">
      {
        showLinks &&
        <div className="flex flex-col items-end gap-2 relative fade-in">
          {
            floatingLinks.map(link => (
              <FloatingLink key={link.href} href={link.href}>{link.label}</FloatingLink>
            ))
          }
        </div>
      }

      <button
        className={`h-14 w-14 relative rounded-full text-white font-semibold shadow ${showLinks ? 'bg-primary-light' : 'bg-primary'} duration-200`}
        onClick={() => setShowLinks(state => !state)}
      >
        Menu
      </button>
    </div>
  )
}