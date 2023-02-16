import { Footer, Header } from '@/components'

import Avatar1 from 'src/assets/images/avatar1.png'
import Avatar2 from 'src/assets/images/avatar2.png'
import Avatar3 from 'src/assets/images/avatar3.png'
import Avatar4 from 'src/assets/images/avatar4.png'

const resumeData = [
  {
    id: 1,
    image: Avatar1,
    alt: 'avatar image',
    name: 'Dr. Edward Gomez',
    profession: 'Surgeon',
    email: 'xyz9800@gmail.com',
    phone: 980000000000,
    desc: 'this is about section of resume',
  },
  {
    id: 2,
    image: Avatar2,
    alt: 'avatar image',
    name: 'Dr.Nita Sharma',
    profession: 'Dentist',
    email: 'xyz9800@gmail.com',
    phone: 980000000000,
    desc: 'this is about section of resume',
  },
  {
    id: 3,
    image: Avatar3,
    alt: 'avatar image',
    name: 'Dr.Nikita Thapa',
    profession: 'Dentist',
    email: 'xyz9800@gmail.com',
    phone: 980000000000,
    desc: 'this is about section of resume',
  },
  {
    id: 4,
    image: Avatar4,
    alt: 'avatar image',
    name: 'Dr.Neha Budhathoki',
    profession: 'Dentist',
    email: 'xyz9800@gmail.com',
    phone: 980000000000,
    desc: 'this is about section of resume',
  },
  {
    id: 5,
    image: Avatar4,
    alt: 'avatar image',
    name: 'Dr.Ram Shrestha',
    profession: 'Dentist',
    email: 'xyz9800@gmail.com',
    phone: 980000000000,
    desc: 'this is about section of resume',
  },
  {
    id: 6,
    image: Avatar3,
    alt: 'avatar image',
    name: 'Dr.Harry Lautner',
    profession: 'Dentist',
    email: 'xyz9800@gmail.com',
    phone: 980000000000,
    desc: 'this is about section of resume',
  },
  {
    id: 7,
    image: Avatar2,
    alt: 'avatar image',
    name: 'Dr. Prem Sharma',
    profession: 'Dentist',
    email: 'xyz9800@gmail.com',
    phone: 980000000000,
    desc: 'this is about section of resume',
  },
  {
    id: 8,
    image: Avatar2,
    alt: 'avatar image',
    name: 'Dr.Nisha Gautam',
    profession: 'Dentist',
    email: 'xyz9800@gmail.com',
    phone: 980000000000,
    desc: 'this is about section of resume',
  },
]
function ContactInfo() {
  return (
    <>
      <Header />
      {/* <div className="container mx-auto h-[700px]">
        {resumeData.map((item) => {
          return <Resume key={item.id} image={item.image} alt={item.alt} desc={item.desc} email={item.desc} name={item.name} phone={item.phone} profression={item.profession} />
        })}
      </div> */}
      <Footer />
    </>
  )
}

export default ContactInfo
