import React from "react";
import Image from "react-bootstrap/esm/Image";



const TeamMember = (props) => {

    return(
        <div className="text-white">
        <Image src={props.image} className="rounded"/>
        <h4 className="member-name pt-3">{props.membername}</h4>
        <h6 className="desigmation">{props.designation}</h6>
        </div>
    )
}



export default TeamMember;