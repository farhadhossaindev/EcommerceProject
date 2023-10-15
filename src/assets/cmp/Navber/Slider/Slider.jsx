import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Slider1 from "../../../../assets/img/1.png"
import Slider2 from "../../../../assets/img/2.png"
import Slider3 from "../../../../assets/img/3.png"
import Slider4 from "../../../../assets/img/4.png"

function Slider() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                rewind={true}
                spaceBetween={5}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    '@0.00': {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    '@0.75': {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    '@1.00': {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    '@1.50': {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                  }}
            >
                <SwiperSlide><img className='w-full' src={Slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={Slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={Slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={Slider4} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider