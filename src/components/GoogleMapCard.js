import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMapCard = (props) => {

  const defaultProps = {
    center: {
      lat: 28.61803770268127, 
      lng: 77.27937324635165
    },
    zoom: 15
  };

return(
  <div className='rounded'>
  <Button className={props.className} onClick={props.onClick}>
<span> {props.text}</span>
</Button>
  <div style={{ height: '41vh', width: '100%' }} className="gMap">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </div>
    )
}

    export default GoogleMapCard;