import React from "react";
import Image from "react-bootstrap/esm/Image";
import RoadMapList from "./RoadMapList";



const RoadMap = (props) => {

    return(
        <div className="text-white text-center">
            <div className="justify-content-center time">
                <h3 className="quarter">{props.qaurter}</h3>
                <h5 className="year">{props.year}</h5>
            </div>
        </div>
    )
}



export default RoadMap;