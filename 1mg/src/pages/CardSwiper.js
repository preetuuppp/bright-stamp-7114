
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

import { Card,Button } from 'react-bootstrap';

// import Dabar from "./Dabar";





const CardSwiper = (props) => {

    const{imgSrc,title}=props.data




  return (
    <div>
      <Card className='p-0 overflow-hidden h-100 shadow' style={{height:'50px',borderRadius:'50px'}}>
        <div className='overflow-hidden rounded p-0 bg-light'>
            <Card.Img varient='top' src={imgSrc} width={30}/>
        </div>
        <Card.Body className='text-center'>
        {/* <Card.Title className='display-3'>{title}</Card.Title> */}

</Card.Body>
      </Card>
    </div>
  )
}

export default CardSwiper
