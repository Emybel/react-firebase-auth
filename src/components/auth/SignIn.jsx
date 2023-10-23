import React, {useState} from 'react';
import {auth} from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const LogIn = (e) =>{
    // todo : sign in
    e.preventDefault();
    signInWithEmailAndPassword (auth,email,password)
    .then((userCredential) =>{
      console.log('userCredential', userCredential);
    }).catch((error)=> console.log(error))

  }

  return (
    <div className='p-3 w-1/3 md:w-80 sm:w-80 bg-white rounded-md flex flex-col ' >
      <form 
        onSubmit={LogIn}
        className='w-full bg-white rounded-md'>

        <h1 className='mt-6  text-2xl font-bold text-gray-800 lg:text-3xl xl:text-4xl'>
          Log In to your Account
        </h1>
        
          <input 
            type='email'
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter your email' 
            className='m-3 border-2 hover:bg-sky-100 focus:bg-slate-100 border-gray-200/50 focus:border-gray-100 w-full border-white rounded focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-200 focus:ring-opacity-50 '
            ></input>
          
          <input 
            type='password' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter your pssword' 
            className='m-3 border-2 hover:bg-sky-100 focus:bg-slate-100 border-gray-200/50 focus:border-gray-100 w-full border-white rounded focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-200 focus:ring-opacity-50 '
            ></input>

          <button
            type="submit"
            className='inline-block px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-50 active:bg-cyan-800  text-white uppercase tracking-wider font-semibold text-sm '
          > Log In </button>

      </form>
    </div>
  )
}
