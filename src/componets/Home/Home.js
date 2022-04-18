import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Slider from './Slider/Slider';
import "./Home.css"

const Home = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
            <Slider></Slider>
            <h1 className='text-center my-4 text-primary'> Provider Services</h1>
            <div className='service container'>
                {
                    services.map(service=> <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Home;