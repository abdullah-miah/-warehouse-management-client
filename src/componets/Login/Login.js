import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "../Login/Login.css";
import Social from '../Social/Social';

const Login = () => {
    const emailRef=useRef('');
    const passwordRef =useRef('');
    const handleSubmit =event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    return (
        <div>
            <div>
            <h4 className='text-center mt-5 text-primary'> Please Login Here</h4>
           <form onSubmit={handleSubmit} className='w-25 mx-auto login-form bg-info'>
               <label>Email Adress</label>
               <br/>
               <input ref={emailRef} type="email" placeholder="Email adress" required></input>
               <br/>
               <label>Password</label>
               <br/>
               <input ref ={passwordRef} type="password" placeholder='password' required></input>
               <br/>
               <input className='mt-3' type="submit" value="Login"></input>
               <span>I have no account ?</span><span> <Link to="/signup"> Create an Account</Link></span>
           </form>
           
        </div>
        <Social></Social>
        </div>
    );
};

export default Login;