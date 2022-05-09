import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='container mt-3 bg-light border'>
            <div className='row'>
            <div className='col-lg-6 col-sm-6'>
             <div style={{margin: '80px 20px'}}>
             <h1 className='text-primary'> Smart Hub Tech Warehoue</h1>
             <p className='text-primary'> Smart Hub Tech warehouse employee maintain product sell and store.
                 Every Register employee can sold any product and items. 
             </p>
             <button style={{margin: '70px 0px 0px 0px '}} onClick={()=>navigate('/signup')} className='btn btn-info text-light'>Get Started</button>
             </div>
            </div>
            <div className='col-lg-6 col-sm-6'>
            <img className='img-fluid' style={{width: '530px'}} src ={'https://novalinkmx.com/wp-content/uploads/2020/07/InventoryManagement.png'}></img>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;