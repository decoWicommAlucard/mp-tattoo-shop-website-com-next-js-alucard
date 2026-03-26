import Link from 'next/link'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className="w-full pl-10 pt-12 lg:pt-16 lg:pl-0">
      <div className=" flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center container mx-auto lg:h-20">
        <h1 className="text-3xl font-londrina max-w-2/5">
          <Link href="/">
            Sandro <strong className="text-[#FFD911]">Luz</strong> Tattoo
            <br /> Shop
          </Link>
        </h1>

        <NavBar />
      </div>
    </header>
  )
}

export default Header
