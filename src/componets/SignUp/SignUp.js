import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import auth from '../../firebase.init';
import { async } from '@firebase/util';

const SignUp = () => {
    const navigate = useNavigate();
    const [agree, setAgree]=useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const signUphandle= async event=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
          await createUserWithEmailAndPassword(email, password);
          await updateProfile({ displayName:name });
        
      }
      if(user){
          navigate('/');
          console.log('user', user)
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
               <div className='mt-3'>
               <input onClick={()=>setAgree(!agree)} type="checkbox" name='checkbox'></input>
               <span className={agree?'ps-2 text-primary': 'ps-2 text-danger'}>Accept Terms and Conditions</span>
               </div>
               <br/>
               <input 
               disabled={!agree}
               className='mt-3' 
               type="submit" 
               value="SignUp">
               </input>
               <span>Already have an account ?</span><span> <Link to="/login"> Login here</Link></span>
               
           </form>
        </div>
        <Social></Social>
        </>
    );
};

export default SignUp;