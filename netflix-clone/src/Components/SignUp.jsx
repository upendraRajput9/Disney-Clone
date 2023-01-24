import React from 'react'
import { useRef } from 'react';
import { auth } from '../firebase';

const SignUp = () => {
   const emailRef = useRef(null);
   const passwordRef = useRef(null);

    const register = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch(error=>{
            alert(error)
        });
    }

    const signIn = (e)=>{
e.preventDefault();
auth.signInWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
)
.then((authUser)=>{
    console.log(authUser);
})
.catch(error=>{
    alert(error)
});
    }

  return (
    <div className='signUp_comp'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email'/>
            <input ref={passwordRef} type="password" placeholder='Password'/>
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4> <span style={{color:"gray"}}>New to Netflix?</span>
            <span onClick={register} className='signUp_link'> Sign Up now</span></h4>
        </form>
      
    </div>
  )
}

export default SignUp
