import React from 'react';
import Image from 'react-bootstrap/Image';



const SneakerSingle = (props) => {

  return(
    <div className="text-center text-white sneaker">
    <Image class="img-fluid" src={props.src}></Image>
    <h4>{props.title}</h4>
    </div>
      )
  }


    export default SneakerSingle;