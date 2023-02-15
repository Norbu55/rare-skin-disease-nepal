import { FacebookSvg, InstagramSvg, LinkedinSvg, TwitterSvg } from '@/assets/svg'

function Footer() {
  return (
    <div className="bg-blue-700 h-[200px]">
      {/* <h2>Rare Skin Disease Nepal</h2> */}
      <div className="flex pt-[50px] justify-center gap-x-[30px] ">
        <div className="hover:scale-110 ease-in duration-300">
          <FacebookSvg />
        </div>
        <div className="hover:scale-110 ease-in duration-300">
          <LinkedinSvg />
        </div>
        <div className="hover:scale-110 ease-in duration-300">
          <InstagramSvg />
        </div>
        <div className="  hover:scale-110 ease-in duration-300">
          <TwitterSvg />
        </div>
      </div>
      <h2 className="text-white text-lg text-center my-[20px]">&copy; 2023 Rare Skin Disease Nepal. All rights reserved.</h2>
    </div>
  )
}

export default Footer
