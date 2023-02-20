import Image from 'next/image'
import SwiperImage2 from 'src/assets/images/slider2.png'
import SwiperImage3 from 'src/assets/images/slider3.png'
import SwiperImage4 from 'src/assets/images/slider4.png'
import SwiperImage8 from 'src/assets/images/slider8.png'
import SwiperImage7 from 'src/assets/images/slogan.png'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'

function Slider() {
  return (
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
        <Image src={SwiperImage2} alt="images" className="w-full" priority />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={SwiperImage3} alt="images" className="w-full" priority />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={SwiperImage4} alt="images" className="w-full" priority />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={SwiperImage7} alt="images" className="w-full" priority />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={SwiperImage8} alt="images" className="w-full" priority />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
