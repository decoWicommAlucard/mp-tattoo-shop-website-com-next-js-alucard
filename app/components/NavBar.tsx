'use client'
import Link from 'next/link'
import WhatApp from './icons/WhatAppIcon'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col lg:items-end">
      <ul className="flex gap-6 lg:gap-10">
        <li>
          <Link
            href="/servicos"
            className={`font-londrina ${pathname === '/servicos' && 'underline'}`}
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            href="/sobre"
            className={`font-londrina ${pathname === '/sobre' && 'underline'}`}
          >
            Sobre Mim
          </Link>
        </li>
        <li>
          <Link
            href="/contato"
            className={`font-londrina ${pathname === '/contato' && 'underline'}`}
          >
            Contato
          </Link>
        </li>
      </ul>
      <p className="hidden lg:flex lg:gap-1 items-center font-inter text-xs text-[#636363]">
        <WhatApp />
        (+55 11) 99999 9999
      </p>
    </nav>
  )
}

export default NavBar
