import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'


const LeaderBoardCard = (props) => {

return(
  <>

<Button className={props.className} onClick={props.onClick}>
<span> {props.text}</span>
</Button>

<Image src='./assets/images/Rankings.png' classname="img-fluid" style={{ width: '100%' }} />

</>

    )
}

    export default LeaderBoardCard;