import { createContext, useContext,useState } from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom"

import axios from "axios"
import {useEffect} from "react"

export const AuthContext=createContext()

export const AuthProvider=({children})=>{

  const [isAuth,setAuth]=useState(false)
const navigate=useNavigate()

const {state} =useLocation()

const login=(params)=>{
  axios.post("https://reqres.in/api/login",params).then(data=>{
    setAuth(true)
    localStorage.setItem("token",data.token)
    if(state.form){
      navigate(state.from,{replace:true})
    }else{
      navigate("/")
    }
  }).catch((e)=>{
    setAuth(false)
    localStorage.removeItem("token")
  })
}

const logout=()=>{
  setAuth(false)
  navigate("/")
  localStorage.setItem("token","")
}

useEffect(()=>{
  let token=localStorage.getItem("token")
  if(token){
    setAuth(token)
  }
},[])
  return <AuthContext.Provider vlaue={{isAuth,login,logout}} >
    {children}
  </AuthContext.Provider>
}

const RequiredAuth = ({ children }) => {

const {isAuth} =useContext(AuthContext)
const {state}=useLocation()

if(isAuth){
  return children
}else{
  <Navigate
  to="/login"
  state={{from :state}}
  replace
  />
}

};

export default RequiredAuth;
