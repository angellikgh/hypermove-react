import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'


const MoveCard = (props) => {

return(
  <div>

<Button className={props.className} onClick={props.onClick}>
<span> {props.text}</span>
</Button>

<Image src='./assets/images/walker.gif' className='img-fluid'/>

</div>

    )
}

    export default MoveCard;