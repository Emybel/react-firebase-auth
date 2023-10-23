import React, {useEffect, useState} from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from '@firebase/auth';

function AuthDetails() {

    const[authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) =>{
            if(user){
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        })

            return () => listen();

        }, []);

        const userSignOut = () => {
            signOut(auth).then(() => {
                console.log('sign out succesfully')
                }).catch((error) => {console.log(error)});
        }

  return (
    <div>
      {authUser ? 
        <div className='w-full flex flex-col text-white font-medium '>
            <p className='text-lg my-10' >{`Connected as " ${authUser.email} "`}</p> 
            <button
                className='inline-block px-5 py-3 rounded-lg bg-green-500 hover:bg-green-400 hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-50 active:bg-green-800  text-white uppercase tracking-wider font-semibold text-sm '
                onClick={userSignOut}    
                    >
                Log Out</button>
        </div>
        : 
            
            <div className='w-full flex flex-col text-white font-medium'>
                <h2>Please Login or Sign Up to see details</h2></div>}
            </div>
  )
}
export default AuthDetails