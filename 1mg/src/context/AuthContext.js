import React, { useState } from 'react';
import { createContext } from 'react';

export const AuthContext=createContext();

export default function AuthContextprovider({children}){
const[isAuth,setIsAuth]=useState(true);
const[token,setToken]=useState("")

const login=()=>{
setIsAuth(true)
setToken(token)


}
const logout=()=>{
   setIsAuth(false) 
   setToken("")
}

    return (<AuthContext.Provider value={{login,logout,isAuth,token}} >{children}</AuthContext.Provider>)
}