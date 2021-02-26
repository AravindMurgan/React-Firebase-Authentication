import React, { createContext, useContext, useState,useEffect } from 'react';
import {auth} from '../firebase';

const AuthContext = createContext();

///const useAuth = useContext(AuthContext); --- brad usage///
export const useAuth = ()=>{
    return useContext(AuthContext)
}

 const AuthState = ({children}) => {

    const [currentUser,setCurrentUser]=useState();

    const signUp = (email,password)=>{
        auth.createUserWithEmailAndPassword(email,password)
    }

   useEffect(() => {
      const unsubscribe =  auth.onAuthStateChanged(user=>{
           setCurrentUser(user)
       })
      
    return unsubscribe
   },[])

    const value ={
        currentUser,
        signUp
    }


	return (
		<>
			<AuthContext.Provider value={value} >

                {children}
            </AuthContext.Provider>
		</>
	);
};

export default AuthState;