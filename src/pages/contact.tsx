import { AddressSvg, EmailSvg, PhoneSvg } from '@/assets/svg'
import { ContactDetail, Footer, Header } from '@/components'
import Image from 'next/image'
import ContactImage from 'src/assets/images/contact-image.png'
import WorldMapImage from 'src/assets/images/world-map.jpg'
const contactData = [
  {
    icon: <PhoneSvg />,
    title: 'Phone',
    desc: '9841777800',
  },
  {
    icon: <EmailSvg />,
    title: 'Email',
    desc: 'drnirajparajuli@gmail.com',
  },
  {
    icon: <AddressSvg />,
    title: 'Address',
    desc: 'Kathmandu, Nepal',
  },
]

function Contact() {
  return (
    <>
      <Header />

      <div className="container mx-auto bg-blue-50 m-[100px] py-[80px] text-center rounded-[8px] border border-blue-200">
        <h2 className="text-4xl  font-semibold text-blue-900">Need Some Help ?</h2>
        <div className="flex  m-[70px] rounded-[4px] items-center gap-x-[60px] justify-evenly">
          <Image src={ContactImage} alt="image" />
          <div>
            {contactData.map((item, index) => {
              return <ContactDetail icon={item.icon} title={item.title} desc={item.desc} key={index} />
            })}
          </div>
        </div>
      </div>
      <div>
        <Image src={WorldMapImage} alt="world-map-image" className="w-full h-[700px]" />
      </div>
      <Footer />
    </>
  )
}

export default Contact
