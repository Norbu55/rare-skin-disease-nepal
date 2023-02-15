import Image from 'next/image'
import Link from 'next/link'
import Logo from 'src/assets/images/rare-skin-logo.png'
function Header() {
  return (
    <div className="sticky top-0 bg-blue-200 z-10">
      <div className="container mx-auto flex items-center gap-x-[30px] justify-between ">
        <Image src={Logo} alt="rare-skin-nepal-logo" height="150" width="150" />
        <h2 className="text-4xl text-blue-700 font-semibold capitalize">RARE SKIN DISEASE NEPAL</h2>
        <Link href="/contact">
          <h2 className="bg-blue-700 hover:bg-blue-800 border border-black py-[16px] px-[60px] text-white rounded-[4px]">CONTACT</h2>
        </Link>
      </div>
      <div className=" bg-blue-700  w-full">
        <div className="container mx-auto flex py-[20px] text-white text-base gap-x-[30px] flex-wrap">
          <Link href="/">
            <h2 className="hover:underline">HOME</h2>
          </Link>
          <Link href="/about">
            <h2 className="hover:underline">ABOUT</h2>
          </Link>
          <Link href="/teams">
            <h2 className="hover:underline">OUR DOCTORS</h2>
          </Link>
          <h2 className="hover:underline">PUBLICATION/NEWS</h2>
          <h2 className="hover:underline">OUR OBJECTIVES</h2>
          <h2 className="hover:underline">PATIENT</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
