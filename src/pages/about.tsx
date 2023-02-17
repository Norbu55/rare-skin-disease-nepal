import { Footer, Header } from '@/components'
import Image from 'next/image'
import AboutSectionImage from 'src/assets/images/about-image-doctor.png'
function About() {
  return (
    <div>
      <Header />
      <Image src={AboutSectionImage} alt="about-section-image" />
      <article className="container mx-auto grid gap-y-[40px] mt-[40px] relative">
        <div className="w-[700px] absolute h-[239px] bottom-[40%] right-[90px] bg-[#F20F10] blur-[200px]" />
        <h2 className="text-3xl font-semibold text-blue-900">What is rare disease (RD)?</h2>
        <div className="text-justify grid gap-y-[30px] text-lg mb-[50px]">
          <ul className="flex flex-col gap-y-[30px]">
            <li>
              Rare diseases are a group of diseases or syndromes that are often chronic in nature and usually life-threatening. Majority of these diseases are genetic in nature, hence present by
              childhood. There are no geographically predisposed or endemic regions for rare diseases, hence they present in every country. However, not all rare conditions are of genetic origin.
              Other rare diseases include rare infections (bacterial or viral), rare allergic reactions and rare cancers.
            </li>
            <li>
              There is generally a lack of awareness, expertise and research in rare diseases. It is a herculean task to receive a proper diagnosis to persons with rare diseases. Access to medical
              treatment, therapies, services and the appropriate health and social care are lacking in Nepal.
            </li>
          </ul>
        </div>
        <h2 className="text-3xl font-semibold text-blue-900">What are the problems with rare diseases?</h2>
        <div className="text-justify grid gap-y-[30px] text-lg mb-[50px]">
          <ul className="flex flex-col gap-y-[30px]">
            <li>The impact of living with a rare disease goes beyond health. It is felt in every aspect of life, by persons living with rare disease and their families.</li>
            <li>
              Although there are on data on rare disease in Nepal, these patients experience inequities and vulnerabilities including difficult inclusion and integration in mainstream education
              systems, discrimination and social exclusion, and a greater risk of impoverishment.
            </li>
            <li>
              An increase in cost of treatment is experienced by the people and families with rare diseases. Families are impoverished by the increased costs associated with care for rare conditions,
              while accessing and retaining decent work is a challenge for caregivers and Persons Living with a Rare Disease (PLWRD). Women face greater social stigma if present with a Rare Disease.
              A lack of public awareness means that Persons Living with a Rare Disease and their challenges are often invisible and unrecognized.
            </li>
            <li>Around the world, rare disease community calls for greater recognition, inclusion and participation in society.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold text-blue-900">Problem in diagnosis of rare disease:</h2>
        <div className="text-justify grid gap-y-[30px] text-lg mb-[50px]">
          <ul className="flex flex-col gap-y-[30px]">
            <li>
              Delayed diagnosis, lack of diagnosis or multiple misdiagnoses are common challenges for PLWRD. Many people living with rare disease report a difficult diagnostic process from the symptom
              onset until they obtain the definitive diagnosis.
            </li>
            <li>
              From the time of symptom onset until a definitive diagnosis is received, the RD diagnostic process may involve visits to different specialists, numerous tests, travel to health centres
              other than the patient’s usual clinic, moving house, inappropriate treatments, hospitalizations, or the performance of surgical interventions, among other problems.
            </li>
            <li>“Diagnostic odyssey”: Part of process which gives rise to increased stress, anxiety, and uncertainty about the patient’s future—something experienced by the whole family.</li>
            <ul>
              <h2>
                Based on the Aarhus Statement, which lays down the key time points and periods of the diagnostic process, the following <b>three time periods</b> can be distinguished:
              </h2>
              <li className="mt-[20px]">( i ) the period running from symptom onset until first medical visit, generally in a primary health care setting</li>
              <li>( ii ) the period that elapses between first medical visit and referral to specialised care</li>
              <li>
                ( iii ) the period covering the time from referral to a specialist until reaching a definitive diagnosis, which could be further subdivided into, firstly, the time from referral until
                being seen by the specialist, and secondly, the time from that first specialist appointment until obtaining the diagnosis.
              </li>
            </ul>

            <ul>
              <h2>Similarly, although there is no clear list of causes that contribute to such a diagnostic delay, the most cited of these include:</h2>
              <li className="mt-[20px]">( i ) the lack of scientific knowledge surrounding RDs as a whole</li>
              <li>( ii ) the presence of widely varying non-specific symptoms that overlap between different clinical entities</li>
              <li>( iii ) the time spent in attending the different medical appointments, undergoing tests and obtaining results</li>
              <li>( iv ) the unavailability of ad hoc diagnostic tests</li>
            </ul>
          </ul>
          <h2>
            Future in-depth studies are needed to continue the work of determining these factors in different types of RDs, along with the implications which this diagnostic process has for the lives
            of persons affected by RDs and their families, at a social, educational, occupational, psychological, and financial level.
          </h2>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default About
