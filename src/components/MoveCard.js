import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'


const MoveCard = (props) => {

return(
  <>

<Button className={props.className} onClick={props.onClick}>
<span> {props.text}</span>
</Button>

  <Image src='./assets/images/walker.gif' className='img-fluid' style={{marginTop: '20px'}} />

</>

    )
}

    export default MoveCard;