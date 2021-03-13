import React, { useEffect, useReducer, useState } from 'react'
import { toast } from 'react-toastify';
import { Getdata, Postdata,Deletedata, PostFormdata } from '../../../api/Server';
export const useService=()=>{
    
    const [data,setData]=useState([]);
   
    useEffect(()=>{
Getdata('http://localhost:8186/user?fromSize=0').then(d=>{
    
setData(d?.users||[])})
    },[])
    const add=(v)=>new Promise((resolve,reject)=>{
        fetch("http://localhost:8186/user",{
            method:"POST",
            headers:
            { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
            },
        body: JSON.stringify(v)}).then(d=>{
            if(d.status<300){
                toast.success("Submited Successfully")
               d.json().then(f=>setData(data=>[...data,f])) 
                resolve();
            }
            else{
                throw d.json().then(f=>toast.error(f.message))
            
            }
            
        }).catch(err=>toast.error(err.message))
       
    })
    const update=(v)=>new Promise((resolve,reject)=>{
        fetch("http://localhost:8186/user",{
            method:"PUT",
            headers:
            { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
            },
        body: JSON.stringify(v)}).then(d=>{
            if(d.status<300){
                toast.success("Updated Successfully")
                setData(data=>data.map(item1=>item1.userName==v.userName?v:item1))
                resolve();
            }
            else{
                throw d.json().then(f=>toast.error(f.message))
            }
            
        }).catch(err=>toast.error(err.message))
        
    })
    

    const deletec=(v)=>{
        
        Deletedata("http://localhost:8186/user","DELETE",v.userName).then(d=>{
            toast.error("deleted Successfully")
      
       setData(data=>data.filter(item1=>item1.userName!=v.userName))
        })
       
        }
 const actions={add,update,deletec}
return [data||[],actions]
}