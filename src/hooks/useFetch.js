import React ,{useState,useEffect}from 'react'

export default function useFetch(url) {
    const controller = new AbortController();
    //https://cors-anywhere.herokuapp.com/
const { signal } = controller;
//const baseurl='http://keproject-env.eba-i6rhizxy.ap-south-1.elasticbeanstalk.com/'
    const baseurl='https://cors-anywhere.herokuapp.com/http://keproject-env.eba-i6rhizxy.ap-south-1.elasticbeanstalk.com/'
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    
useEffect(async() => {
    setLoading(true)
    try{
   const req=await fetch(baseurl+url,{headers:
    { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
    }});
   const res=await req.json();
    
        setLoading(false);
        setData(res);
        console.log(res)
  }catch(e){
        setLoading(false)
        setError(e.message)
    };
    
    
    return () => {
        controller.abort()
    }
}, [url])
    return [loading,error,data];
}
