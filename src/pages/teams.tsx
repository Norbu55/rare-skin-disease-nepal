import { Avatar, Footer, Header } from '@/components'

import Avatar1 from 'src/assets/images/avatar1.png'
import Avatar2 from 'src/assets/images/avatar2.png'
import Avatar3 from 'src/assets/images/avatar3.png'
import Avatar4 from 'src/assets/images/avatar4.png'

const AvatarData = [
  {
    id: 1,
    image: Avatar1,
    alt: 'avatar image',
    title: 'Dr. Edward Gomez',
    role: 'Surgeon',
  },
  {
    id: 2,
    image: Avatar2,
    alt: 'avatar image',
    title: 'Dr.Nita Sharma',
    role: 'Dentist',
  },
  {
    id: 3,
    image: Avatar3,
    alt: 'avatar image',
    title: 'Dr.Nikita Thapa',
    role: 'Dentist',
  },
  {
    id: 4,
    image: Avatar4,
    alt: 'avatar image',
    title: 'Dr.Neha Budhathoki',
    role: 'Dentist',
  },
  {
    id: 5,
    image: Avatar4,
    alt: 'avatar image',
    title: 'Dr.Ram Shrestha',
    role: 'Dentist',
  },
  {
    id: 6,
    image: Avatar3,
    alt: 'avatar image',
    title: 'Dr.Harry Lautner',
    role: 'Dentist',
  },
  {
    id: 7,
    image: Avatar2,
    alt: 'avatar image',
    title: 'Dr. Prem Sharma',
    role: 'Dentist',
  },
  {
    id: 8,
    image: Avatar2,
    alt: 'avatar image',
    title: 'Dr.Nisha Gautam',
    role: 'Dentist',
  },
]

function Teams() {
  return (
    <>
      <Header />
      <div className="container mx-auto text-center my-[40px] ">
        <h2 className="text-3xl text-blue-700 font-semibold">Meet The Team</h2>
        <div className="flex   justify-center flex-wrap  gap-y-[80px] gap-x-[60px] my-[80px]">
          {AvatarData.map((item, index) => {
            return <Avatar image={item.image} title={item.title} role={item.role} alt={item.alt} key={index} />
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Teams
