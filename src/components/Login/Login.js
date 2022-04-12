import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();


      const handleEmail=event=>{
        setEmail(event.target.value)
        console.log(event.target.value)
    }
    const handlePassword=event=>{
        setPassword(event.target.value)
        console.log(event.target.value)
    }
    if(user){
        navigate('/shop')
    }
    const handleLogin= event=>{
        event.preventDefault()
        
        signInWithEmailAndPassword(email,password)

    }
    return (
        <div className='input-container'>
           <div>
           <form onSubmit={handleLogin}>
               <h3 className='color:red'>Log-in</h3>
               <div>
                   <div className="input-field">
                   <label htmlFor="email">Email</label>
                   <input onBlur={handleEmail} type="email" />
                   </div>
                   <div className="input-field">
                   <label htmlFor="password">Password</label>
                   <input  onBlur={handlePassword} type="password" />
                   </div>
                   <p>{error?.message}</p>
                   {
                   loading && <h5>Loading......</h5>
                        }
                   <input type="submit" value="Login" />
                   <p>New to Ema-Jhon? <Link to='/SingUp'> Create An Account</Link></p>
               </div>
           </form>
           </div>
        </div>
    );
};

export default Login;