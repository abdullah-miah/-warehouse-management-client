import { applyActionCode, getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Social = () => {
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement =<div>
        <p>Error: {error?.message} {error1?.message}</p>
      </div>
      }
     if(user || user1){
         navigate('/');
     }

    return (
        <div>
            <div className='mt-2'>
            <div className='w-25 mx-auto d-flex align-items-center g-2'>
                <div style={{height: '1px'}} className='bg-primary w-50'>

                </div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'>

                </div>
            </div>
            
            <div className='w-25 mx-auto'>
            {errorElement}
            <button onClick={()=> signInWithGoogle()} type="button" class="btn btn-primary mb-3 w-100">Google sign In</button>
            <br/>
           <button onClick={()=> signInWithGithub()} type="button" class="btn btn-secondary w-100">Github sign In</button>
            </div>
        </div>
        </div>
    );
};

export default Social;