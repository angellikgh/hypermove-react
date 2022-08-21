import React from 'react';
import Button from 'react-bootstrap/Button';


const SocialBtn = (props) => {

return(
  

<Button className={props.className} onClick={props.onClick}>
<span>{props.icon} </span>
<span> {props.text}</span>
</Button>

    )
}

    export default SocialBtn;