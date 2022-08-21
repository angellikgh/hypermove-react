import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoFitnessOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa";
import SocialBtn from './SocialBtn';





const OurAim = (props) => {

  return(
    <Container className='text-center text-white fw-light py-5'>
    <SocialBtn className="dark-btn my-5 text-center" text="Our Aim"/>
    <Row className='align-items-center text-center'>
    
    <Col className='icon-holder'>
    <div className=''>
    <SocialBtn className="icon-btn" icon={<IoFitnessOutline />}/>
    </div>
    
      <h2 className='py-3'>Healthy Lifestyle</h2>
      <p>We encourage users to adopt to healthier lifestyle with our app.</p>
    </Col>
    <Col className='icon-holder'>
    <div className=''>
    <SocialBtn className="icon-btn" icon={<IoGameControllerOutline />}/>
    </div>
      <h2 className='py-3'>True Blockchain Gaming</h2>
      <p>Experience M2E & P2E at its purest form in a decentralized environment.</p>
    </Col>
    <Col className='icon-holder'>
    <div className=''>
    <SocialBtn className="icon-btn" icon={<FaEthereum />}/>
    </div>
      <h2 className='py-3'>Passive Rewards</h2>
      <p>Earn cryptocurrencies as passive rewards from your activities.</p>
    </Col>
    </Row>
    </Container>
      )
  }






    export default OurAim;