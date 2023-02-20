// import React from 'react'
// import Teams from './index';
import Image from 'next/image'
import RushamaImage from 'src/assets/images/rushma.png'
function Rushma() {
  return (
    <>
      <div className="container mx-auto my-[40px]">
        <Image src={RushamaImage} alt="dr.rushma image" className="h-[330px] w-[350px]" priority />
        <article>
          <h2 className="text-3xl font-semibold text-blue-900 mt-[30px]">Dr. Rushma Shrestha</h2>
          <p className="text-justify grid gap-y-[30px] text-lg mt-[20px]">
            Dr Shrestha is a senior dermatologist working at National Academy of Medical Sciences, Bir Hospital, Kathmandu since 2008. Her interests are community dermatology and public health
            intervention in dermatology. She has been an active team member of Dermatology Care in Rural Nepal since 2010 which focuses on skin diseases in rural Nepal. She has published numerous
            papers in both national and international journals. She has also presented in multiple national and international conferences. She has been invited as chairperson in various national and
            international conferences. She hold the position of Professor since 2020. Her hobbies include travelling, hiking and sports.
          </p>
        </article>
      </div>
    </>
  )
}

export default Rushma
