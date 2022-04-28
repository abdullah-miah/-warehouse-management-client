import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CheckOut/CheckOUt'

const CheckOUt = () => {
    const navigate =useNavigate();
    const [agree, setAgree]=useState(false);
    
    const confirmOrder=()=>{
        navigate('/orderConfirm')
    }
    
    return (
        <div className='w-75 mx-auto mt-4'>
            <h2 className='text-center text-primary '>Booking Confirmation</h2>
            <form className='w-50 mx-auto'>
            <div>
                <div>
                    <label>Full Name</label>
                     <input  type='text' name='name' placeholder='Full name' required></input>
                    <label>Email Adress</label>
                     <input type='email' name='email' placeholder='Email Adress' required></input>
                    <label>Phone Number</label>
                     <input type='number' name='number' placeholder='Phone number' required></input>
                     <label>Payment Method</label>
                     <input type='text' name='payment' placeholder='Bkash/Rokect/Cash/Visa' required></input>
                    <label> Write Full Adress</label>
                     <textarea onClick={()=>setAgree(!agree)} cols='50' rows='5' required>
                         Write your Full Address ...........
                     </textarea>
                     <br/>
                     <button
                     disabled={!agree}
                     onClick={confirmOrder} className='btn btn-primary mt-3 '>Confirm Booking</button>
                </div>
            </div>
             
            </form>
        </div>
    );
};

export default CheckOUt;