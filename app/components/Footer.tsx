'use client'

import Link from 'next/link'
import WhatApp from './icons/WhatAppIcon'

const whatsappHref = 'https://wa.me/5511999999999'

const Footer = () => {
  return (
    <footer className="w-full relative">
      <div className="w-full absolute lg:bottom-0 lg:-z-1 bg-[#171717] px-6 py-8 ">
        <div className="flex justify-between lg:justify-normal items-center gap-[38px] lg:gap-4">
          <div className="font-inter text-xs text-[#767676] lg:flex lg: items-center lg:gap-4">
            <p>Sandro Luz Tattoo Shop</p>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="#FFD911" />
            </svg>
            <p>Rua Limoeiro, 1000 - Catalao - SP</p>
          </div>

          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#FFD911" />
          </svg>

          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:hidden block"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#FFD911" />
          </svg>

          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 font-inter text-xs text-[#767676] transition-colors hover:text-white"
          >
            <WhatApp className="h-4 w-4 shrink-0 " />
            <span>(+55 11) 99999 9999</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
