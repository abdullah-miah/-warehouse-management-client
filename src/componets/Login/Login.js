import React from 'react';
import "../Login/Login.css";

const Login = () => {
    return (
        <div>
            <h4 className='text-center mt-5 text-primary'> Please Login Here</h4>
           <form className='w-25 mx-auto login-form bg-info'>
               <label>Email Adress</label>
               <br/>
               <input type="email" placeholder="Email adress" required></input>
               <br/>
               <label>Password</label>
               <br/>
               <input type="password" placeholder='password' required></input>
               <br/>
               <input className='mt-3' type="submit"></input>
           </form>
        </div>
    );
};

export default Login;