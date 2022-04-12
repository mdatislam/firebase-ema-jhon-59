import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const SingUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [ConfirmedPassword,setConfiremedPassword]=useState('')
    const [error,setError]=useState('')
    const navigate= useNavigate();
    const [createUserWithEmailAndPassword,user]= useCreateUserWithEmailAndPassword(auth);

    const handleEmail=event=>{
        setEmail(event.target.value)
        console.log(event.target.value)
    }
    const handlePassword=event=>{
        setPassword(event.target.value)
        console.log(event.target.value)
    }
    const handleConfirmedPassword=event=>{
        setConfiremedPassword(event.target.value)
        console.log(event.target.value)
    }
    if(user){
        navigate('/shop')
    }
    const handleCreateUser = event =>{
        event.preventDefault()
        if(password !== ConfirmedPassword){
            setError('Your Two password not Match')
        return
        }
        if(password.length<6){
            setError('Password length should be more than 6 character') 
            return
        }
        createUserWithEmailAndPassword(email,password)
        
    }

    return (
        <div className='input-container'>
           <div>
           <form onSubmit={handleCreateUser}>
               <h3 className='color:red'>Sing-Up</h3>
               <div>
                   <div className="input-field">
                   <label  htmlFor="email">Email</label>
                   <input onBlur={handleEmail} type="email" />
                   </div>
                   <div className="input-field">
                   <label htmlFor="password">Password</label>
                   <input onBlur={handlePassword}  type="password" />
                   </div>
                   <div className="input-field">
                   <label htmlFor="password">ConfirmedPassword</label>
                   <input onBlur={handleConfirmedPassword} type="password" />
                   </div>
                   <input type="submit" value="Sing-Up" />
                   <p style={{color:'red'}}> {error}</p>
                   <p>Already have account? <Link to='/Login'>Log-in</Link></p>
               </div>
           </form>
           </div>
        </div>
    );
};

export default SingUp;