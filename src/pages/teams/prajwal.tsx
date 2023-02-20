import { Footer, Header } from '@/components'
import Image from 'next/image'
// import Prajwal from './prajwal'

function Prajwal() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-[40px]">
        <Image src="" alt="" className="h-[330px] w-[350px] border-blue-200" priority />
        <article>
          <h2 className="text-3xl font-semibold text-blue-900 mt-[30px]">Dr. Prajwal Pudasaini</h2>
          <p className="text-justify grid gap-y-[30px] text-lg mt-[20px]">
            Dr. Prajwal Pudasaini is a young and energetic dermatologist and aesthetic surgeon. He currently works as a Dermatology registrar at Civil Service Hospital. Even at an young age, he has
            established himself as a successful researcher and has represented Nepal in multiple international platforms. He has been a brilliant speaker in the media for creating awareness in skin
            diseases and issues pertaining to skin health. He has also written multiple columns for national daily newspapers. He is invited frequently by the national media for interview on skin
            health. He has multiple publications in national and international journals. He also serves as an Associate Editor for Clinical Case Reports Journal.
          </p>
          <p className="text-justify grid gap-y-[30px] text-lg mt-[20px]">His interest include leprosy, pigmentary disorders and impact of skin disease on health aspects.</p>
        </article>
        <article>
          <h2 className="text-3xl font-semibold text-blue-900 mt-[30px]">Research Work</h2>
          <ul className="text-justify grid gap-y-[10px] text-lg mt-[30px] list-decimal pl-[30px]">
            <li>Pudasaini P, Pudasaini P. Cutaneous leishmaniasis: A case report of a diagnostic dilemma. Clin Case Rep. 2022;10:e05428. doi:10.1002/ccr3.5428</li>
            <li>Pudasaini P, Paudel S, Adhikari S, Kafle M. DermatoFibroSarcoma Protuberans: A case report of a complete cure. Clin Case Rep. 2022;10:e06218. doi: 10.1002/ccr3.6218</li>
            <li>
              Pudasaini P, Neupane S. An Observational Study to Evaluate Quality of Life in Patients with Melasma in A Tertiary Level Hospital of Pokhara. Nepal Journal of Dermatology, Venereology
              &amp; Leprology 2021;19(1):37-41
              <br />
              <a href="https://doi.org/10.3126/njdvl.v19i1.35047" target="_blank" className="underline text-blue-700">
                https://doi.org/10.3126/njdvl.v19i1.35047
              </a>
              .
            </li>
            <li>
              Pudasaini P, Ranjit A Neupane S. Scrub typhus in Western Nepal: A series of case reports. Nepal Journal of Dermatology,Venereology and Leprology 2020;18(1):67-72
              <br />
              <a href=" https://doi.org/10.3126/njdvl.v18i1.27290" target="_blank" className="underline text-blue-700">
                https://doi.org/10.3126/njdvl.v18i1.27290
              </a>
            </li>
            <li>
              Pudasaini, P., Pudasaini, P., &amp; Bhatta, R. (2021). Papular Elastorrhexis: A Case Report of Rare Connective Tissue Naevus. Nepal Journal of Dermatology, Venereology &amp; Leprology,
              19(2), 62–64
              <br />
              <a href="https://doi.org/10.3126/njdvl.v19i2.38465" target="_blank" className="underline text-blue-700">
                https://doi.org/10.3126/njdvl.v19i2.38465
              </a>
            </li>
            <li>
              Pudasaini P, Gurung G, Paudel A, Paudel S. Cutaneous Manifestations of COVID-19 in Nepal: A Series of Case Reports. NJDVL 2022;20(1):51-4.
              <a href="https://doi.org/10.3126/njdvl.v20i1.40750" target="_blank" className="underline text-blue-700">
                https://doi.org/10.3126/njdvl.v20i1.40750
              </a>
            </li>
          </ul>
        </article>
      </div>
      <Footer />
    </>
  )
}

export default Prajwal
