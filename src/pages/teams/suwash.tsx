import Image from 'next/image'
import SuwashImage from 'src/assets/images/suwash.png'
// import Prajwal from './prajwal'

function Smita() {
  return (
    <>
      <div className="container mx-auto my-[40px]">
        <Image src={SuwashImage} alt="dr.rushma image" className="h-[330px] w-[300px]" priority />
        <article>
          <h2 className="text-3xl font-semibold text-blue-900 mt-[30px]">Dr. Suwash Baral</h2>
          <p className="text-justify grid gap-y-[30px] text-lg mt-[20px]">
            Dr Baral is a consultant dermatologist and dermatopathologist working at Anandaban hospital, The Leprosy mission Nepal since 2014. He is graduated from Maharajgunj Medical Campus Institute
            of medicine and he did his fellowship in dermatopathology from Wake Forest University, USA. He is highly interested in leprosy and other skin NTDs. He has been an active team member of
            Dermatology care in Rural Nepal. He has presented in multiple national and international conferences and has published different papers in national and international journals. His hobbies
            include travelling and reading.
          </p>
        </article>
      </div>
    </>
  )
}

export default Smita
