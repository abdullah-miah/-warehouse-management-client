import React, { useContext, useEffect, useState } from 'react';
import Service from '../Service/Service';
import Slider from './Slider/Slider';
import "./Home.css"
import Gallery from '../Gallery/Gallery';
import { servicesContext } from '../../App';

const Home = () => {
  const [services, setServices]=useContext(servicesContext);
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
            <Gallery></Gallery>
        </div>
    );
};

export default Home;