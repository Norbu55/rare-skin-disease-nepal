import Image from 'next/image'

interface resumeProps {
  name: string
  alt: string
  profression: string
  image: any
  desc: string
  email: string
  phone: number
}

function Resume({ name, profression, image, desc, alt, email, phone }: resumeProps) {
  return (
    <div>
      <Image src={image} alt={alt} />
      <h2>{name}</h2>
      <p>{profression}</p>
      <p>{email}</p>
      <p>{desc}</p>
      <p>{phone}</p>
    </div>
  )
}

export default Resume
