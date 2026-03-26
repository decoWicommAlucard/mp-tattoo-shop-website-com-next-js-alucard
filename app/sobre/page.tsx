import Image from 'next/image'
import sandro from '../../public/sobre.png'
import sobreDesktop from '../../public/sobre-desktop.png'

interface SobreProps {
  id: number
  text: string
}

const sobre: SobreProps[] = [
  {
    id: 1,
    text: 'Ola! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e se imprime na pele. Com mais de 10 anos de experiencia no mundo da tatuagem, dedico-me a transformar visoes e emocoes em arte corporal que expressa quem voce e e o que voce ama.',
  },
  {
    id: 2,
    text: 'Cada tatuagem em meu estudio e um trabalho de colaboracao; ouco atentamente os desejos e as historias de meus clientes para que cada peca seja unica e pessoal. Especializo-me em varios estilos, do traco fino a composicoes mais robustas e coloridas, garantindo que cada design nao so atenda, mas supere as expectativas.',
  },
  {
    id: 3,
    text: 'Alem da dedicacao a arte, a seguranca e o conforto sao prioridades no meu estudio. Utilizo apenas equipamentos esterilizados e de alta qualidade, e sou rigoroso com os protocolos de higiene e seguranca, garantindo uma experiencia segura e confortavel para todos.',
  },
  {
    id: 4,
    text: 'Visite meu estudio e veja como a arte pode se manifestar em sua pele. Estou aqui para ajuda-lo a contar sua historia de uma maneira unica e eterna. Agende sua consulta e vamos juntos criar algo extraordinario!',
  },
]

const Sobre = () => {
  return (
    <section className="container mx-auto w-full px-4 pt-10 lg:px-0 lg:pt-12">
      <div className="relative overflow-hidden px-6 py-8 lg:min-h-[799px] lg:px-0 lg:pt-20 lg:pb-0">
        <div className="relative z-20 max-w-[40rem] pb-10 lg:pb-44">
          <h1 className="font-inter text-3xl font-black tracking-[-0.04em] text-white lg:text-[3rem]">
            Prazer, sou <strong className="text-[#FFD911]">Sandro Luz</strong>
          </h1>

          <div className="mt-8 space-y-5">
            {sobre.map((item) => (
              <p
                key={item.id}
                className="font-inter text-sm leading-7 font-light text-[#8B8B8B] lg:text-base lg:leading-7"
              >
                {item.text}
              </p>
            ))}
          </div>

          <p
            className="mt-10 text-[2rem] text-[#D8D8D8]"
            style={{ fontFamily: 'cursive' }}
          >
            Sandro Luz
          </p>
        </div>

        <div className="relative z-20 mt-10 flex justify-center lg:hidden">
          <Image
            src={sandro}
            alt="Sandro Luz"
            priority
            sizes="(min-width: 640px) 430px, calc(100vw - 3rem)"
            className="h-auto w-full max-w-[430px]"
          />
        </div>

        <Image
          src={sobreDesktop}
          alt="Sandro Luz"
          priority
          sizes="(min-width: 1280px) 380px, (min-width: 1024px) 340px, 0px"
          className="pointer-events-none hidden lg:absolute lg:bottom-0 lg:right-[-3.5rem] lg:z-10 lg:block lg:h-[799px] lg:w-auto lg:max-w-none xl:right-0"
        />
      </div>
    </section>
  )
}

export default Sobre
