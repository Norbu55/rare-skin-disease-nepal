import { Footer, Header } from '@/components'
import Image from 'next/image'
// import Prajwal from './prajwal'

function Smita() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-[40px]">
        <Image src="" alt="" className="h-[330px] w-[350px] border-blue-200" />
        <article>
          <h2 className="text-3xl font-semibold text-blue-900 mt-[30px]">Dr. Smita Joshi</h2>
          <p className="text-justify grid gap-y-[30px] text-lg mt-[20px]">
            Dr. Joshi received her undergraduate degree from Kathmandu Medical College, Kathmandu University. She completed her post-graduation in Dermatology, Venereology and Leprology from
            Postgraduate Institute of Medical Education and Research, Chandigarh, India. She thoroughly developed her clinical acumen, teaching and research skills as a faculty at the Department of
            Dermatology, Nepal Medical College over a span of seven years. She has had opportunity to observe at hospitals in Canada, Singapore and the United Kingdom. She is a recipient of DEBRA
            International grant for training in epidermolysis bullosa at Great Ormond Street Hospital, U.K. She had completed a one-year clinical fellowship in Pediatric Dermatology at the Hospital
            for Sick Children (SickKids), University of Toronto, Canada. Dr. Joshi is currently a full-time consultant at DI Skin Hospital and Referral Center, Golfutar, Kathmandu.
          </p>
        </article>
      </div>
      <Footer />
    </>
  )
}

export default Smita
