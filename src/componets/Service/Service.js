import React from 'react';
import "./Service.css"

const Service = ({service}) => {
   const {id,title, img,price,description}=service;
    return (
        <div>
            <div className='service-card'>
                <img src={img}></img>
            <p className='text-primary fs-5'>{title}</p>
            <p>{description}</p>
            <p className='text-danger'> Price: ${price}</p>
            <button>Book Now</button>
         </div>
        </div>
    );
};

export default Service;