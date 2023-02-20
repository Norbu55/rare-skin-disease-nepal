import { Avatar, Footer, Header } from '@/components'
import Image from 'next/image'
import Avatar1 from 'src/assets/images/avatar1.png'
import Avatar2 from 'src/assets/images/avatar2.png'
import Avatar3 from 'src/assets/images/avatar3.png'
import Avatar4 from 'src/assets/images/avatar4.png'
import GroupDoctorImage from 'src/assets/images/doctor-group.png'

const AvatarData = [
  {
    id: 1,
    image: Avatar1,
    alt: 'avatar image',
    title: 'Dr. Edward Gomez',
    role: 'Surgeon',
    info: 'View profile',
    // email: 'xyz@gmail.com',
  },
  {
    id: 2,
    image: Avatar2,
    alt: 'avatar image',
    title: 'Dr.Nita Sharma',
    role: 'Dentist',
    info: 'View profile',
    // email: 'xyz@gmail.com',
  },
  {
    id: 3,
    image: Avatar3,
    alt: 'avatar image',
    title: 'Dr.Nikita Thapa',
    role: 'Dentist',
    info: 'View profile',
    // email: 'xyz@gmail.com',
  },
  {
    id: 4,
    image: Avatar4,
    alt: 'avatar image',
    title: 'Dr.Neha Budhathoki',
    role: 'Dentist',
    info: 'View profile',
    // email: 'xyz@gmail.com',
  },
  {
    id: 5,
    image: Avatar4,
    alt: 'avatar image',
    title: 'Dr.Ram Shrestha',
    role: 'Dentist',
    info: 'View profile',
    // email: 'xyz@gmail.com',
  },
  {
    id: 6,
    image: Avatar3,
    alt: 'avatar image',
    title: 'Dr.Harry Lautner',
    role: 'Dentist',
    info: 'View profile',
    // email: 'xyz@gmail.com',
  },
  {
    id: 7,
    image: Avatar2,
    alt: 'avatar image',
    title: 'Dr. Prem Sharma',
    role: 'Dentist',
    info: 'View profile',
    // email: 'xyz@gmail.com',
  },
  {
    id: 8,
    image: Avatar2,
    alt: 'avatar image',
    title: 'Dr.Nisha Gautam',
    role: 'Dentist',
    info: 'View profile',
    // email: 'xyz@gmail.com',
  },
]

function Teams() {
  return (
    <>
      <Header />
      <Image src={GroupDoctorImage} alt="doctor-image" className="w-full" />
      <div className="container mx-auto text-center">
        <h2 className="text-4xl my-[30px] text-blue-700 font-semibold ">
          Meet The <span className="text-black ">Team</span>
        </h2>

        <div className="flex flex-wrap gap-y-[80px] gap-x-[60px] justify-center my-[50px] ">
          {AvatarData.map((item, index) => {
            return <Avatar image={item.image} title={item.title} role={item.role} alt={item.alt} key={index} info={item.info} />
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Teams
