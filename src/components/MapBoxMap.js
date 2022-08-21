import React, { useRef, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 

mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2FqOTY5NSIsImEiOiJjbDZ5ZHU5OTIwb3JqM2lxbWZ2bTVvcjQ4In0.ZzvBsABWcugX1G8jbTT7sA';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapBoxMap = (props) => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-73.99166365839467);
  const [lat, setLat] = useState(40.71031048318204);
  const [zoom, setZoom] = useState(18);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/pankaj9695/cl6yen7im000o14koqo043bbc',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div className='rounded'>
      <Button className={props.className} onClick={props.onClick}>
        <span> {props.text}</span>
      </Button>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default MapBoxMap;
