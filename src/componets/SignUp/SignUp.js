import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h4 className='text-center mt-5 text-primary'> SignUp Here</h4>
           <form className='w-25 mx-auto login-form bg-info'>
           <label>Your Name</label>
               <br/>
               <input type="text" placeholder="Your Name" required></input>
               <br/>
               <label>Email Adress</label>
               <br/>
               <input type="email" placeholder="Email adress" required></input>
               <br/>
               <label>Password</label>
               <br/>
               <input type="password" placeholder='password' required></input>
               <br/>
               <input className='mt-3' type="submit" value="SignUp"></input>
           </form>
        </div>
    );
};

export default SignUp;