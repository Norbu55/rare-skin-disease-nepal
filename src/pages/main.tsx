import Image from 'next/image'
import BackgroundImage from 'src/assets/images/doctor-background-image.jpg'
import RareSkinDisease from 'src/assets/images/skin-disease.png'
import SwiperImage1 from 'src/assets/images/swiper-image1.png'
import SwiperImage2 from 'src/assets/images/swiper-image2.png'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'

function Main() {
  return (
    <div>
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
          delay: 1700,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          <Image src={BackgroundImage} alt="images" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={RareSkinDisease} alt="images" className="w-full" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={SwiperImage1} alt="images" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SwiperImage2} alt="images" />
        </SwiperSlide>
      </Swiper>
      {/* <Image src={BackgroundImage} alt="images" /> */}
    </div>
  )
}

export default Main
