import { AddressSvg, EmailSvg, PhoneSvg } from '@/assets/svg'
import { ContactDetail, Footer, Header } from '@/components'
import Image from 'next/image'
import ContactImage from 'src/assets/images/contact-image.png'
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

      <div className="container mx-auto bg-blue-50 my-[50px] py-[30px] text-center rounded-[8px]">
        <h2 className="text-4xl  font-semibold text-blue-900 ">Need Some Help ?</h2>
        <div className="flex  rounded-[4px] items-center py-[30px] justify-evenly flex-wrap">
          <Image src={ContactImage} alt="image" />
          <div>
            {contactData.map((item, index) => {
              return <ContactDetail icon={item.icon} title={item.title} desc={item.desc} key={index} />
            })}
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7062.083387321665!2d85.34378179807781!3d27.74685998076401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1951641f68f1%3A0x51e5d0d248db446e!2sGolfutar%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1676523562738!5m2!1sen!2sus"
          loading="lazy"
          className="mb-[30px] border border-blue-200 w-full h-[600px]"
        />
      </div>

      <Footer />
    </>
  )
}

export default Contact
