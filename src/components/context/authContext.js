import React, { createContext, useContext, useState,useEffect } from 'react';
import {auth} from '../firebase';

const AuthContext = createContext();

///const useAuth = useContext(AuthContext); --- brad usage///
export const useAuth = ()=>{
    return useContext(AuthContext)
}

 const AuthState = ({children}) => {

    const [currentUser,setCurrentUser]=useState();
    const [loading,setLoading]=useState(true);

    const signUp = (email,password)=>{
        auth.createUserWithEmailAndPassword(email,password)
    }

    const login = (email,password)=>{
        auth.signInWithEmailAndPassword(email,password)
    }

    const logout = ()=>{
        auth.signOut();
    }

   useEffect(() => {
      const unsubscribe =  auth.onAuthStateChanged(user=>{
           setCurrentUser(user)
           setLoading(false)
       })
      
    return unsubscribe
   },[])

    const value ={
        currentUser,
        signUp,
        login,
        logout
    }


	return (
		<>
			<AuthContext.Provider value={value} >

                {!loading && children}
            </AuthContext.Provider>
		</>
	);
};

export default AuthState;