import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { servicesContext } from '../../App';

const OrderConfirm = () => {
    return (
        <div className='w-50 mx-auto mt-5'>
            <img src={'https://thumbs.dreamstime.com/b/thank-you-inscription-background-colored-spray-paint-flat-design-157141080.jpg'}></img>
            <h2 className='text-center'>Thanks for your Booking.</h2>
            <h5 className='text-center'>Stay with us. I will contact with you After One hours</h5>
        </div>
    );
};

export default OrderConfirm;