import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='w-25 mx-auto'>
            <p>Please CheckOUt</p>
            <div>
            <button className='btn btn-primary'>
                <Link className='text-decoration-none text-white' to='/checkout'>Proceeed</Link>
            </button>
            </div>
        </div>
    );
};

export default Services;