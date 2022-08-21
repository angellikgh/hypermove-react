import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GameSlide from './GameSlide';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SocialBtn from './SocialBtn';


const HyperGames = (props) => {

  return(
    <Container className='p-5 hyper-slides-container'>
   
    <Row className='align-items-center hypergame-bg'>
    
    <div className='slides-wrapper text-center'>
   
    <div className='slides-container'>
    <SocialBtn className="dark-btn mb-4 text-center" text="Our Aim"/>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay  ]}
    spaceBetween={250}
    centeredSlides={true}
    slidesPerView={3}
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
  
  </Swiper>

  
    <div className='d-flex flex-row row-cols-4 g-3 hypergames'>
    <GameSlide src="./assets/images/game01.png" title="Candy Match"/> 
    <GameSlide src="./assets/images/game02.png" title="Candy Jam"/> 
    <GameSlide src="./assets/images/game03.png" title="Bubble Invasion"/> 
    <GameSlide src="./assets/images/game04.png" title="9 Ball Pool"/> 
    <GameSlide src="./assets/images/game05.png" title="Fruit Connect"/> 
    <GameSlide src="./assets/images/game06.png" title="Arithmetic Game"/> 
    
 
    </div>
    
    </div>
   
    </div>
    
   
    
    </Row>
    </Container>
      )
  }


    export default HyperGames;