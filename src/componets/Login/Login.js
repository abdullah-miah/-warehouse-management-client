import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import "../Login/Login.css";
import Social from '../Social/Social';


  import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Login = () => {
    const emailRef=useRef('');
    const passwordRef =useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const handleSubmit =event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        navigate(from, { replace: true });
    }
    let errorElement;
    if (error) {
        errorElement =<p>Error: {error?.message}</p>
      }
      const resetPassword= async()=>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
        toast('Sent email');
        }
      }
    return (
        <div>
            <div>
            <h2 className='text-center mt-5 text-primary'> Please Login Here</h2>
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
               <span>I have no account ?</span><span> <Link className='text-decoration-none' to="/signup"> Create an Account</Link></span>
               <p> <span>Forget password?</span><a href='#'onClick={resetPassword} className='text-decoration-none'>Forget Password</a></p>
                <p className='text-danger'>{errorElement}</p>
           </form>
           
        </div>
        <Social></Social>
        
        </div>
    );
};

export default Login;