import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { servicesContext } from '../../App';

const Services = () => {
    const navigate = useNavigate()
    const {id}=useParams()
    const [Services]= useContext(servicesContext)
    const service =Services.find((service)=>service.id ==id)
    console.log(service);
    return (
        <div className='w-25 mx-auto mt-3'>
            <h1 className='text-center text-primary'>Please CheckOut</h1>
            <div className='mt-4'>
            <img src={service?.img}></img>
            <h5 className='mt-2'>{service?.title}</h5>
            <p>{service?.description}</p>
            <p className='text-danger'>Price: ${service?.price}</p>
            </div>
            <div>
            <button onClick={()=> navigate('/checkOut')} className='btn btn-primary w-75'>
            Proceeed
            </button>
            </div>
        </div>
    );
};

export default Services;