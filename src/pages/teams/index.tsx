import { Avatar } from '@/components'
import Image from 'next/image'
import Avatar1 from 'src/assets/images/avatar1.png'
import Avatar4 from 'src/assets/images/avatar4.png'
import GroupDoctorImage from 'src/assets/images/doctor-group.png'
import RabindraImage from 'src/assets/images/rabindra.png'
import RushamaImage from 'src/assets/images/rushma.png'

const AvatarData = [
  {
    id: 1,
    image: Avatar1,
    alt: 'avatar image',
    title: 'Dr. Niraj Parajuli',
    href: '/teams/niraj',
    role: 'Senior Consultant Dermatologist & Assistant Professor',
    info: 'View profile',
  },
  {
    id: 2,
    image: RushamaImage,
    alt: 'avatar image',
    href: '/teams/rushma',
    title: 'Dr. Rushma Shrestha',
    role: 'Senior Dermatologist',
    info: 'View profile',
  },
  {
    id: 3,
    image: Avatar1,
    alt: 'avatar image',
    href: '/teams/prajwal',
    title: 'Dr. Prajwal Pudasaini',
    role: 'Dermatologist & Aesthetic Surgeon',
    info: 'View profile',
  },
  {
    id: 4,
    image: RabindraImage,
    alt: 'avatar image',
    href: '/teams/rabindra',
    title: 'Dr. Rabindra Baskota',
    role: 'Senior Consultant Dermatologist',
    info: 'View profile',
  },
  {
    id: 5,
    image: Avatar4,
    alt: 'avatar image',
    href: '/teams/smita',
    title: 'Dr. Smita Joshi',
    role: 'MD & Pediatric Dermatologist',
    info: 'View profile',
  },
]

function Teams() {
  return (
    <>
      <Image src={GroupDoctorImage} alt="doctor-image" className="w-full" />
      <div className="container mx-auto text-center">
        <h2 className="text-4xl my-[30px] text-blue-700 font-semibold ">
          Meet The <span className="text-black ">Team</span>
        </h2>

        <div className="flex flex-wrap gap-y-[80px] gap-x-[60px] justify-center my-[50px] ">
          {AvatarData.map((item, index) => {
            return <Avatar image={item.image} title={item.title} role={item.role} alt={item.alt} key={index} info={item.info} href={item.href} />
          })}
        </div>
      </div>
    </>
  )
}

export default Teams
