import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SocialBtn from './SocialBtn';
import { FaRegHeart } from "react-icons/fa";

const GameSlide = (props)=>{
return(
    <div className="mt-5 game-slides me-2">
    <Card className="p-2 game-card text-white text-start">
      <Card.Img variant="top" src={props.src} />
      <Card.Body className="p-2">
      <div className="d-flex align-items-center justify-content-between">
      <Card.Title className="me-2 game-title">{props.title}</Card.Title>
      <SocialBtn className="like-btn" icon={<FaRegHeart />}/>
      </div>
        
        
      </Card.Body>
    </Card>
    </div>
    
)
}


export default GameSlide;