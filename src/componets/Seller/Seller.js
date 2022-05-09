import React from 'react';
import { useNavigate } from 'react-router-dom';

const Seller = () => {
    const navigate = useNavigate();
    const signUp =()=>{
        navigate('/signup')
    }
    return (
        <div className='container'>
            <h1 className='text-center text-info mb-5'>New Seller Register Now</h1>
            <div className='row'>
                <div className='col-lg-6 col-sm-6'>
                  <img style={{width: '500px', }} src={'https://amzdatastudio.com/wp-content/uploads/2018/06/file-RnnkmLwTp3.png'}></img>
                </div>
                <div className='col-lg-6 col-sm-6 mt-5' >
                    <p className='ml-5'> Smart Hub Tech Market place world wide. If you Sell our product you join our seller employee.SmartHub tech is always beign Satisfyed her every seller yearly.</p>
                   <button className='btn btn-primary w-50 mt-5' onClick={signUp}>Register</button>
                </div>

            </div>
        </div>
    );
};

export default Seller;