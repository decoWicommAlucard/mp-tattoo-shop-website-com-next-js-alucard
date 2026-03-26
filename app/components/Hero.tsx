import Image from 'next/image'
import heroImage from '../../public/hero.png'
import heroImageMobile from '../../public/hero-mobile.png'

const HeroSection = () => {
  return (
    <section className="w-full pl-10  lg:px-10">
      <Image
        src={heroImage}
        alt="Hero Image"
        priority
        sizes="calc(100vw - 80px)"
        className="hidden h-auto w-full lg:block"
      />
      <Image
        src={heroImageMobile}
        alt="Hero Image Mobile"
        priority
        sizes="calc(100vw - 40px)"
        className="block h-auto w-full lg:hidden"
      />
    </section>
  )
}

export default HeroSection
