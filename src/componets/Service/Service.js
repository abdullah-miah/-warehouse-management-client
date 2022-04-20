import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
   const {title, img,price,description}=service;
    return (
        <div>
            <div className='service-card'>
                <img src={img}></img>
            <p className='text-primary fs-5'>{title}</p>
            <p>{description}</p>
            <p className='text-danger'> Price: ${price}</p>
            <button className='card-btn'>
                <Link className='text-decoration-none text-white' to ="/services"> Book Now</Link>
            </button>
         </div>
        </div>
    );
};

export default Service;