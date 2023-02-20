import { Slider } from '@/components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ButterflyAwarenessImage from 'src/assets/images/butterfly-awareness.png'
import MeetingImage from 'src/assets/images/meeting.png'
import RareDiseaseImage from 'src/assets/images/rare-disease.jpg'
function Main() {
  const router = useRouter()
  return (
    <>
      <Slider />
      <div className="bg-blue-50   flex my-[50px]">
        <div className="flex container mx-auto justify-between flex-wrap p-[20px]">
          <div className="p-[20px] xl:mt-[150px] lg:mt-[100px] md:mt-[20px] sm:mt-[15px] w-[700px]">
            <h2 className="text-3xl text-blue-900 font-semibold">Rare Disease</h2>
            <h2 className="text-justify text-lg">
              Rare diseases are a group of diseases or syndromes that are often chronic in nature and usually life-threatening. Majority of these diseases are genetic in nature, hence present by
              childhood.
              <br /> There are no geographically predisposed or endemic regions for rare diseases, hence they present in every country. However, not all rare conditions are of genetic origin. Other
              rare diseases include rare infections (bacterial or viral), rare allergic reactions and rare cancers. <br />
              There is generally a lack of awareness, expertise and research in rare diseases. It is a herculean task to receive a proper diagnosis to persons with rare diseases. Access to medical
              treatment, therapies, services and the appropriate health and social care are lacking in Nepal.
            </h2>
            <button className="text-white py-[10px] px-[30px] mt-[20px] bg-blue-800 hover:bg-blue-900 rounded-[4px]" onClick={() => router.push('/about')}>
              Learn more
            </button>
          </div>
          <div>
            <Image src={RareDiseaseImage} alt="rare-disease-image" className="xl:w-[650px] mt-[20px]" />
          </div>
        </div>
      </div>
      <div className="flex my-[50px]">
        <div className="flex container mx-auto flex-wrap p-[20px] justify-between">
          <div>
            <Image src={MeetingImage} alt="rare-disease-image" className=" mt-[20px]" />
          </div>
          <div className="p-[20px] xl:mt-[150px] lg:mt-[100px] md:mt-[20px] sm:mt-[15px] w-[640px]">
            <h2 className="text-3xl text-blue-900 font-semibold">First Consultative Meeting on Rare Disease</h2>
            <h2 className="text-justify text-lg">
              On February 2022, the first national consultative meeting was organized at the leprosy control and disability management section with the theme “ A Global Priority for Equity”. Dr Niraj
              Parajuli presented on various aspects of rare disease and its impact on persons living with a rare disease. The session was chaired by the Director General, Department of Health
              Services, Ministry of Health and Population, Kathmandu, Nepal. It was also attended by Director of Epidemiology and Disease Control Division, Curative Service Division and Nepal Health
              Training Center. It was moderated by the Section Chief of LCDMS, Dr Rabindra Baskota. It was also a platform where patients with rare disease shared their problems to dignitaries of the
              ministry of health and population. An informal discussion looking into problems faced by the patients with xeroderma pigmentosa were elaborated by patient and family members during the
              meeting.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex my-[50px]">
        <div className="flex container mx-auto justify-between flex-wrap p-[20px]">
          <div className="p-[20px]  w-[700px]">
            <h2 className="text-3xl text-blue-900 font-semibold">“Tilicho Trek Awareness: The Butterfly challenge”</h2>
            <h2 className="text-justify text-lg">
              During the Epidermolysis bullosa awareness week, Dr Niraj and his team went for a awareness trek to the Tilicho lake, the highest freshwater lake in the world. He, along with two other
              friends took this week long grueling trek to spread awareness on rare disease. Majority of patients with rare disease have some form of disability which restricts their mobility. Across
              the world, many organizations promote the awareness through run or gathering. We decided that trek will explain the difficulties they face in their everyday life. We would be continuing
              it as a part of our yearly awareness campaign. I hope the government of Nepal and other non-governmental institutes will join us in this nobel cause. We also hope some of our daring
              patients will come forth to join as well.
            </h2>
          </div>
          <div>
            <Image src={ButterflyAwarenessImage} alt="rare-disease-image" className="xl:w-[650px] mt-[150px]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
