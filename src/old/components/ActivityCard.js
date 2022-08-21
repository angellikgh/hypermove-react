import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const ActivityCard = (props) => {

return(
  <div>
  <Button className='dark-btn'>FIND ON MAP</Button>
    <Card >
      {props.element}
      
    </Card>
    </div>

    )
}

    export default ActivityCard;