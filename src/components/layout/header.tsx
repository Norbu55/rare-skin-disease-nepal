// import Image from 'next/image'
// import Link from 'next/link'
// import Logo from 'src/assets/images/rare-skin-logo.png'
// import styles from '../../styles/underline.module.css'

// function Header() {
//   return (
//     <div className="bg-blue-200 z-10">
//       <div className="container mx-auto flex items-center justify-between ">
//         <Image src={Logo} alt="rare-skin-nepal-logo" height="150" width="150" />
//         <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-blue-700 font-semibold capitalize">RARE SKIN DISEASE NEPAL</h2>
//         <Link href="/contact">
//           <h2 className="bg-blue-700 hover:bg-blue-800 border border-blue-900 xl:py-[15px] xl:px-[60px] md:py-[10px] md:px-[20px]  sm:py-[5px] sm:px-[15px] text-white rounded-[4px]">CONTACT</h2>
//         </Link>
//       </div>
//       <div className=" bg-blue-700  w-full">
//         <div className="container mx-auto flex py-[20px] text-white text-base gap-x-[30px] flex-wrap">
//           <Link href="/">
//             <h2 className={styles.underline}>HOME</h2>
//           </Link>
//           <Link href="/about">
//             <h2 className={styles.underline}>ABOUT</h2>
//           </Link>
//           <Link href="/teams">
//             <h2 className={styles.underline}>OUR DOCTORS</h2>
//           </Link>
//           <h2 className={styles.underline}>BLOG</h2>
//           <h2 className={styles.underline}>OUR OBJECTIVES</h2>
//           <h2 className={styles.underline}>PATIENT</h2>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header

import { MenuSvg } from '@/assets/svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Logo from 'src/assets/images/rare-skin-logo.png'
import styles from '../../styles/underline.module.css'

function Header() {
  const [navbar, setNavbar] = useState(false)
  return (
    <div>
      <div className="container mx-auto flex items-center justify-around ">
        <Image src={Logo} alt="rare-skin-nepal-logo" height="150" width="150" />
        <h2 className="xl:text-4xl text-blue-700 font-semibold lg:text-3xl md:text-2xl sm:text-xl">RARE SKIN DISEASE NEPAL</h2>
      </div>
      <nav className="bg-blue-700">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="md:hidden">
                <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                  {navbar ? <MenuSvg /> : <MenuSvg />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
              <ul className=" md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    <h2 className={styles.underline}> Home</h2>
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    <h2 className={styles.underline}> About </h2>
                  </Link>
                </li>

                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0">
                  <Link href="/teams" onClick={() => setNavbar(!navbar)}>
                    <h2 className={styles.underline}> Teams </h2>
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0">
                  <Link href="/news-publication" onClick={() => setNavbar(!navbar)}>
                    <h2 className={styles.underline}> Blogs </h2>
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    <h2 className={styles.underline}> Contact </h2>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
