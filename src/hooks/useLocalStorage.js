import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
export default function useLocalStorage(name,initialValues) {

    const [data,setData]=useState(()=>{
        try{
            return JSON.parse(localStorage.getItem(name));
        }
        catch(e){
            return initialValues
        }
    })

    useEffect(()=>{
       // localStorage.setItem(name,JSON.stringify(data))
    },[data])

   

    const handleData=(v)=>{
       // console.log(v);
        setData(v)
        localStorage.setItem(name,JSON.stringify(data))
      
    }
    return [data,handleData];
}
