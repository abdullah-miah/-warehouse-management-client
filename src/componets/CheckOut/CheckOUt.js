import React from 'react';
import '../CheckOut/CheckOUt'

const CheckOUt = () => {
    return (
        <div className='w-75 mx-auto mt-4'>
            <h2 className='text-center text-primary '>Booking Confirmation</h2>
            <form className='w-50 mx-auto'>
            <div>
                <div>
                    <label>Full Name</label>
                     <input type='text' name='name' placeholder='Full name'></input>
                    <label>Email Adress</label>
                     <input type='email' name='email' placeholder='Email Adress'></input>
                    <label>Phone Number</label>
                     <input type='number' name='number' placeholder='Phone number'></input>
                     <label>Payment Method</label>
                     <input type='text' name='payment' placeholder='Bkash/Rokect/Visa'></input>
                    <label> Write Full Adress</label>
                     <textarea cols='50' rows='5'>
                         Write your Full Adress...........
                     </textarea>
                     <br/>
                     <button className='btn btn-primary mt-3 '>Confirm Booking</button>
                </div>
            </div>
             
            </form>
        </div>
    );
};

export default CheckOUt;