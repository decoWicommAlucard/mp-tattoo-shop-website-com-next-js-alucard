import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import tattooImage from '@/public/tattoo.png'

export default function Contato() {
  return (
    <main className="mx-auto container flex gap-1 justify-between lg:mt-25">
      <section className="mx-auto lg:mx-0">
        <h1 className="text-3xl font-black mt-12 text-center lg:text-left">
          Entre em <span className="text-yellow-400">Contato</span>
        </h1>
        <p className="mt-10 font-light text-zinc-400 text-center lg:text-left">
          Clique no botão abaixo e envie uma mensagem. <br />
          Vamos conversar!
        </p>
        <Link
          target="_blank"
          href="https://wa.me//5511999999999?text=Ol%C3%A1%20Sandro%21%20Entrei%20pelo%20seu%20site%20e%20tenho%20interesse%20em%20uma%20tattoo%21%20Pode%20me%20dar%20mais%20detalhes%3F"
          className="flex justify-center lg:justify-start"
        >
          <button className="bg-zinc-700 p-4 border-b-4 border-zinc-800 rounded flex items-center gap-4 mt-10">
            <FaWhatsapp className="w-8 h-8" />
            <div>
              <p>Enviar Whatsapp</p>
              <p className="text-zinc-500 text-xs">(+55 11 99999 9999)</p>
            </div>
          </button>
        </Link>
      </section>
      <Image
        className="hidden lg:block"
        width="600"
        src={tattooImage}
        alt="Sandro Luz fazendo uma tatuagem"
      />
    </main>
  )
}
