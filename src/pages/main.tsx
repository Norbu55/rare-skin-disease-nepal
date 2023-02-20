import Image from 'next/image'
import { useRouter } from 'next/router'
import RareDiseaseImage from 'src/assets/images/rare-disease.jpg'
import SwiperImage2 from 'src/assets/images/slider2.png'
import SwiperImage3 from 'src/assets/images/slider3.png'
import SwiperImage4 from 'src/assets/images/slider4.png'
import SwiperImage7 from 'src/assets/images/slider7.png'
import SwiperImage8 from 'src/assets/images/slider8.png'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'

function Main() {
  const router = useRouter()
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        style={{
          width: '100%',
          display: 'flex',
          height: '60%',
          objectFit: 'cover',
        }}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          <Image src={SwiperImage2} alt="images" className="w-full" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={SwiperImage3} alt="images" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SwiperImage4} alt="images" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SwiperImage7} alt="images" className="w-full" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={SwiperImage8} alt="images" className="w-full" />
        </SwiperSlide>
      </Swiper>
      <div className="bg-blue-50   flex my-[50px]">
        <div className="flex container mx-auto justify-between flex-wrap p-[20px]">
          <div className="p-[20px] xl:mt-[220px] lg:mt-[100px] md:mt-[20px] sm:mt-[15px] w-[700px]">
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
    </>
  )
}

export default Main
