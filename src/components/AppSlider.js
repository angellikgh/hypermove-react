import React from 'react';
import Marquee from "react-fast-marquee";
import Image from 'react-bootstrap/Image';
import SocialBtn from './SocialBtn';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';
  import 'swiper/css/effect-coverflow';



const AppSlider = (props) => {

  return(
    <div className='text-center'>
    <SocialBtn className="dark-btn mb-5" text="HYPERMOVE APP"/>
  
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay  ]}
    spaceBetween={250}
    centeredSlides={true}
    slidesPerView={2}
    breakpoints={{577: {slidesPerView: 3}}}
    speed={500}
    loop={true}
    grabCursor={true}
    touchRatio={1.5}    
    navigation={true}      
    effect={"coverflow"}
    coverflowEffect={{
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }}
    autoplay={true}
    className="hyperSwiper"
  >
    <SwiperSlide><Image src='./assets/images/app-screens/app1.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app2.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app3.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app4.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app5.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app6.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app7.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app8.png' className='img-fluid'/></SwiperSlide>
    
  
  </Swiper>
  </div>
      )
  }






    export default AppSlider;