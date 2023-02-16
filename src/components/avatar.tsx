import Image from 'next/image'

interface AvatarProps {
  image: any
  alt: string
  title: string
  role: string
  // href: string
  email: string
}

function Avatar({ image, alt, title, role, email }: AvatarProps) {
  return (
    <div className="border w-[300px]  px-[40px] py-[50px]  rounded-[4px] flex flex-col justify-center hover:scale-110 ease-in duration-300">
      <Image src={image} alt={alt} className="w-full" />
      <h2 className="text-lg mt-[15px] font-semibold text-blue-900">{title}</h2>
      <p className="text-lg text-blue-900 mt-[8px]">{role}</p>
      <button className="text-blue-800 hover:text-blue-900 font-bold text-lg mt-[20px]">{email}</button>
    </div>
  )
}

export default Avatar
