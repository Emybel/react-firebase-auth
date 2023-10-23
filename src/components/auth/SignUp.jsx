import React, {useState} from 'react';
import {auth} from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const register = (e) =>{
        // todo : sign in
        e.preventDefault();
        createUserWithEmailAndPassword (auth,email,password)
        .then((userCredential) =>{
        console.log('userCredential', userCredential);
        }).catch((error)=> console.log(error))

  }

  return (
    <div className='p-3 w-1/2 md:w-1/2 sm:w-80 bg-white rounded-md flex flex-col ' >

        <form 
            onSubmit={register}
            className='w-1/2 bg-white rounded-md'>
       
        <h1 className='mt-6  text-2xl font-bold text-gray-800 lg:text-3xl xl:text-4xl'>
          Create a new Account !
        </h1>
        
          <input 
            type='email'
            value={email} 
            placeholder='Enter your email'
            onChange={(e)=>setEmail(e.target.value)} 
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
            className='inline-block px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800  text-white uppercase tracking-wider font-semibold text-sm '
          > Sign Up </button>

      </form>
    </div>
  )
}

export default SignUp
