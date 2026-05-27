import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'
import LoadingScreen from "./Loading";

const Protected = ({children}) => {
    const { loading,user } = useAuth()


    if(loading){
        return (<main><LoadingScreen/></main>)
    }

    if(!user){
        return <Navigate to={'/login'} />
    }
    
    return children
}

export default Protected