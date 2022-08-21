import React from "react";
import Image from "react-bootstrap/esm/Image";
import Col from "react-bootstrap/esm/Col";

const TeamMember = (props) => {
  return(
    <Col sm={4} md={3} xl={2} className="text-white">
      <Image src={props.image} className="rounded"/>
      <h4 className="member-name pt-3">{props.membername}</h4>
      <h6 className="desigmation">{props.designation}</h6>
    </Col>
  )
}

export default TeamMember;
