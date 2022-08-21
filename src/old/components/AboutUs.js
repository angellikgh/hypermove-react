import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const AboutUs = (props) => {

  return(
    <Container>
    <Row className='align-items-center'>
    
    <Col>
    <Image src="assets/images/about.png" className='img-fluid'/>
    </Col>
    <Col>
    <div className='text-left text-white fw-light'>
    <h2 className='py-5 fs-1'>MOVE . PLAY . EARN</h2>
    <p>HyperMove is the world’s first blockchain M2E & P2E integrated app, that allows users to maintain a healthy & fit lifestyle and earn in a decentralized environment.</p>
    <p>HyperMove app provides you a sea of opportunities to convert your daily activities into real world cash as well as earn by playing blockchain powered games.</p>
    <p>Users would have the privilege to earn cryptocurrencies by carrying out their daily activities (Walking, running, swimming etc.) and by playing games online.
    </p>
    </div>
    </Col>
    </Row>
    </Container>
      )
  }






    export default AboutUs;