import Image from 'next/image'
import SwiperImage1 from 'src/assets/images/slider1.png'
import SwiperImage2 from 'src/assets/images/slider2.png'
import SwiperImage3 from 'src/assets/images/slider3.png'
import SwiperImage4 from 'src/assets/images/slider4.png'
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
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          <Image src={SwiperImage1} alt="images" className="w-full" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={SwiperImage2} alt="images" className="w-full" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={SwiperImage3} alt="images" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SwiperImage4} alt="images" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Main
