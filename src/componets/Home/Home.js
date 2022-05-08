import React, { useContext, useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Home.css"
import { servicesContext } from '../../App';
import AddProducts from '../AddProducts/AddProducts';

const Home = () => {
  const [services, setServices]=useContext(servicesContext);
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
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