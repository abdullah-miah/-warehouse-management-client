import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
   const {title, img,price,description,id}=service;
   const navigate = useNavigate();
   const bookNow =()=>{
         navigate(`/services/${id}`);
   }
    return (
        <div>
            <div className='service-card'>
                <img src={img}></img>
            <p className='text-primary fs-5'>{title}</p>
            <p>{description}</p>
            <p className='text-danger'> Price: ${price}</p>
            <button onClick={bookNow} className='card-btn'>
                Book Now
            </button>
         </div>
        </div>
    );
};

export default Service;