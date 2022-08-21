import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsTwitter } from 'react-icons/bs';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { RiFilePaper2Line } from "react-icons/ri";

// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import SocialBtn from './SocialBtn';
import { Button } from 'bootstrap';

const HeroArea = () => {

return(
  

<div className='hero'>
      <Container>
        <Row className="align-items-center ">
          <Col md={8} className="mb-4">
            <h1 className='hero-main-heading'>BLOCKCHAIN's FINEST GAMING PLATFORM!</h1>
            <h3 className='text-white py-3 pe-5'>Onboard HyperMove, Convert your daily activities into real-world cash and Maintain a healthier life-style.</h3>
            <div className="d-flex">
              <a className="btn purple-btn text-white sm-purple-btn font-prstart me-3 d-flex align-items-center" href='#move'>MOVE TO EARN</a>
              <a className="btn purple-btn text-white sm-purple-btn font-prstart me-3 d-flex align-items-center" href='#move'>PLAY TO EARN</a>
              <a className="btn purple-btn text-white sm-purple-btn font-prstart me-3 d-flex align-items-center" href='#move'>METAVERSE</a>
            </div>

            <div className='my-5 d-flex social-buttons'>
              <SocialBtn className="dark-btn me-3  min-width-100" icon={<RiFilePaper2Line />} text="Whitepaper"/>
              <SocialBtn className="dark-btn me-3  min-width-100" icon={<BsTwitter />} text="Twitter"/>
              <SocialBtn className="dark-btn me-3  min-width-100" icon={<FaDiscord />} text="Discord"/>
              <SocialBtn className="dark-btn me-3  min-width-100" icon={<FaTelegramPlane />} text="Telegram"/>
              <SocialBtn className="dark-btn me-3  min-width-100" icon={<FaTelegramPlane />} text="Medium"/>
            </div>

            <div className=' d-flex'>
              <a href="#" className='d-flex align-items-center'><Image src="./assets/images/app-store.png"/></a>
              <a href="#" className='d-flex align-items-center'><Image src="./assets/images/google-play-badge.png" width="150px"/></a>
            </div>
          </Col>
          <Col md={4} className="justify-content-center text-center hero-img">
          <div className='hero-content'>
          <Image fluid src='./assets/images/hero-right-screen.png' className='hero-mobile'></Image>
          
          </div>          
          
          </Col>
        </Row>
       
      </Container>
  
      </div>
    )
}

    export default HeroArea;