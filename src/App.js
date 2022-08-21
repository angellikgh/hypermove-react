import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import './App.css';
import HeroArea from './components/HeroArea';
import BrandMarquee from './components/BrandMarquee';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ActivityCard from './components/ActivityCard';
import GoogleMapCard from './components/GoogleMapCard';
import MoveCard from './components/MoveCard';
import GameCard from './components/GameCard';
import LeaderBoardCard from './components/LeaderboardCard';
import AvatarTransition from './components/AvatarTransition';
import AppSlider from './components/AppSlider';
import MapBoxMap from './components/MapBoxMap';
import AboutUs from './components/AboutUs';
import OurAim from './components/OurAim';
import HyperGames from './components/HyprGames';
import SneakerSingle from './components/SneakerSingle';
import SocialBtn from './components/SocialBtn';
import TeamMember from './components/TeamMember';
import RoadMap from './components/RoadMap';
import RoadMapList from './components/RoadMapList';



const App = () => {

  return (
    <div className='App fw-light'>
      <Header />
      <HeroArea/>
      <Row className="py-5">
      <BrandMarquee/>
      </Row>
      <AboutUs/>
      <OurAim/>
      <Container>
        <Row className="text-white justify-content-center text-center activities-group">
          <Col sm={6} xl={3}><MapBoxMap text="FIND ON MAP" className="dark-btn my-4"/></Col>
          <Col sm={6} xl={3}><GameCard text="SCORE & WIN" className="dark-btn my-4"/></Col>
          <Col sm={6} xl={3}><LeaderBoardCard text="LEADERBOARD" className="dark-btn my-4"/></Col>
          <Col sm={6} xl={3}><MoveCard text="MOVE TO EARN"  className="dark-btn my-4"/></Col>
        </Row>

        <Row className="align-items-center text-white avatar-section">
          <Col md={12} xl={6}>
            <h2 className='section-heading'>Create your <span className='purple-text'>avatar</span> with one tap</h2>
            <p>HyperMove App is equipped with an hassle-free method to create and own an Avatar. Easy as it sounds, Create mesmerising avatars that best represents you with just a tap.</p>
            <a className="btn purple-btn  simple-text text-white sm-purple-btn font-prstart me-3" href='#move'>CREATE AVATAR</a>
          </Col>
          <Col md={12} xl={6}>
            <div className='avatar'>
              <AvatarTransition className="avatar-3d"/>
            </div>
          </Col>
          
          
        </Row>

        <Row className="align-items-center text-white section py-5">
          
          <Col>
          <Image src="./assets/images/3dTurnAround.png" />
          </Col>

          <Col>
          <h2 className='section-heading'>INTO THE <span className='purple-text'>METAVERSE</span></h2>
          <p>HyperMove acts a bridge that connects gamers/users to the vastness of the metaverse virtually via its app.</p>
          <p>Users would have the privilege to explore the blockchain’s core via the HyperMove app that provides you with several opportunities to earn passive income as you maintain a healthier lifestyle.</p>
          <a className="btn purple-btn simple-text text-white sm-purple-btn font-prstart me-3" href='#move'>CREATE AVATAR</a>
          </Col>
          
          
        </Row>
     <Row className='app-slider py-5 my-5'>
    
     <AppSlider/>
     </Row>


     <Row className='py-5'>
     <HyperGames/>
     </Row>

    <div className='sneakers-section text-center'>
      <SocialBtn className="dark-btn mb-4 text-center" text="SNEAKER NFT's"/>
      <Row className='align-items-center'>
        <Col md={12} xl={6}>
          <div className='row row-cols-2'>
            <SneakerSingle src="./assets/images/sneaker01.png" title="NFT#2315"/>
            <SneakerSingle src="./assets/images/sneaker02.png" title="NFT#6306"/>
            <SneakerSingle src="./assets/images/sneaker03.png" title="NFT#3198"/>
            <SneakerSingle src="./assets/images/sneaker04.png" title="NFT#0619"/>
          </div>
        </Col>
        
        <Col md={12} xl={6}>
          <Image src='./assets/images/featured-sneaker.png' className='img-fluid'/>
        </Col>
      </Row>
    </div>

    <div className='team-section text-center'>
      <SocialBtn className="dark-btn my-5 text-center" text="TEAM"/>
      <Row className='row-cols-6 text-center gy-5'>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
        <TeamMember image="./assets/images/team01.png" membername="alfred" designation="ceo"/>
      </Row>
    </div>
    
    </Container>



<Container fluid className='roadmap-section'>

    <Container>
    <div className='py-5 text-center'>
          <SocialBtn className="dark-btn my-5 text-center" text="ROADMAP"/>
          <Row className='text-center g-0 text-white'>
          <Col sm={12} md={6} xl={3}>
          <RoadMap qaurter="Q2" year="2022"></RoadMap>
          <hr className='timeline'></hr>
          <ul className='mt-3 roadmap-list'>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            </ul>
          </Col>
          <Col sm={12} md={6} xl={3}>
          <RoadMap qaurter="Q2" year="2022"></RoadMap>
          <hr className='timeline'></hr>
          <ul className='mt-3 roadmap-list'>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            </ul>
          </Col>
          <Col sm={12} md={6} xl={3}>
          <RoadMap qaurter="Q2" year="2022"></RoadMap>
          <hr className='timeline'></hr>
          <ul className='mt-3 roadmap-list'>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            </ul>
          </Col>
          <Col sm={12} md={6} xl={3}>
          <RoadMap qaurter="Q2" year="2022"></RoadMap>
          <hr className='timeline'></hr>
          <ul className='mt-3 roadmap-list'>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            <li>The concept & idea is born</li>
            </ul>
          </Col>
        
          

            
          </Row>
        </div>
    </Container>

</Container>

<Container className='partners-section text-center'>
<SocialBtn className="dark-btn text-center my-5" text="PARTNERS"/>
    <Row className='row-cols-6 g-3 justify-content-center'>

      <SocialBtn className="purple-btn me-3" text="Infrastructure"/>
      <SocialBtn className="purple-btn me-3" text="Incubatr"/>
      <SocialBtn className="purple-btn me-3" text="DEFI"/>
      <SocialBtn className="purple-btn me-3" text="Launchpads"/>
      <SocialBtn className="purple-btn me-3" text="NFt"/>
      <SocialBtn className="purple-btn me-3" text="GUILD"/>
      <SocialBtn className="purple-btn me-3" text="NFT Marketplace"/>
      <SocialBtn className="purple-btn me-3" text="Gaming Metaverse"/>
      <SocialBtn className="purple-btn me-3" text="Exchange"/>
      <SocialBtn className="purple-btn me-3" text="Wallet"/>
    </Row>

    <Row className='row-cols-6 g-5 partner-logos pt-5 mt-5 justify-content-center'>
   
    <div><Image src='./assets/images/partners/Logo1.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo2.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo3.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo4.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo5.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo6.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo7.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo8.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo9.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo10.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo11.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo12.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo13.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo14.png' className='img-fluid'/></div>
    <div><Image src='./assets/images/partners/Logo15.png' className='img-fluid'/></div>
    </Row>
</Container>
    
    </div>
  );
}

const appRoot = createRoot(document.getElementById('root'));;

appRoot.render(<App />);

export default App;
