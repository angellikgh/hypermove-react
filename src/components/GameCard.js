import React from 'react';
import Button from 'react-bootstrap/Button';
import CubeRun from './CubeRun';

const GameCard = (props) => {
  return (
    <div className='position-relative'>
      <Button className={props.className} onClick={props.onClick}>
        <span>{props.text}</span>
      </Button>
      <CubeRun bgColor='#141622' />
    </div>
  )
}

export default GameCard;
