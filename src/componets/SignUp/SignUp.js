import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import auth from '../../firebase.init';

const SignUp = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const signUphandle=event=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
      }
      if(user){
          navigate('/');
      }
    return (
        <>
        <div>
            <h4 className='text-center mt-5 text-primary'> SignUp Here</h4>
           <form onSubmit={signUphandle} className='w-25 mx-auto login-form bg-info'>
           <label>Your Name</label>
               <br/>
               <input name='name' type="text" placeholder="Your Name" required></input>
               <br/>
               <label>Email Adress</label>
               <br/>
               <input name='email' type="email" placeholder="Email adress" required></input>
               <br/>
               <label>Password</label>
               <br/>
               <input name='password' type="password" placeholder='password' required></input>
               <br/>
               <input className='mt-3' type="submit" value="SignUp"></input>
               <span>I have an account ?</span><span> <Link to="/login"> Login here</Link></span>
           </form>
        </div>
        <Social></Social>
        </>
    );
};

export default SignUp;