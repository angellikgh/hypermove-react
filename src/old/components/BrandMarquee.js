import React from 'react';
import Marquee from "react-fast-marquee";



const BrandMarquee = (props) => {

return(
  
    <Marquee className='brand-marquee' speed={300} gradient={false}>
    <div className='me-5'><span className='purple-text'>MOVE </span> TO EARN</div>
    <div className='me-5'><span className='purple-text'>PLAY </span> TO EARN</div>
    <div className='me-5'><span className='purple-text'>NFT </span> MARKETPLACE</div>
    <div className='me-5'><span className='purple-text'>META</span>VERSE</div>
  </Marquee>


    )
}

    export default BrandMarquee;