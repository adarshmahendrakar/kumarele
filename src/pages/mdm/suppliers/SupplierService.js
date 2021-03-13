import React, { useEffect, useReducer, useState } from 'react'
import { toast } from 'react-toastify';
import { Getdata, Postdata,Deletedata, PostFormdata } from '../../../api/Server';
export const useService=()=>{
    
    const [data,setData]=useState([]);
   
    useEffect(()=>{
Getdata('http://localhost:8186/vendor?fromSize=0').then(d=>{
    
setData(d?.projects||[])})
    },[])
    const add=(v)=>new Promise((resolve,reject)=>{
        fetch("http://localhost:8186/vendor",{
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
        fetch("http://localhost:8186/vendor",{
            method:"PUT",
            headers:
            { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
            },
        body: JSON.stringify({vendor:{...v,createdOn:null,modifiedOn:null}})}).then(d=>{
            if(d.status<300){
                toast.success("Updated Successfully")
                setData(data=>data.map(item1=>item1.vendorCode==v.vendorCode?v:item1))
                resolve();
            }
            else{
                throw d.json().then(f=>toast.error(f.message))
            }
            
        }).catch(err=>toast.error(err.message))
        
    })
    

    const deletec=(v)=>{
        
        Deletedata("http://localhost:8186/vendor","DELETE",v.vendorCode).then(d=>{
            toast.error("deleted Successfully")
      
       setData(data=>data.filter(item1=>item1.vendorCode!=v.vendorCode))
        })
       
        }
 const actions={add,update,deletec}
return [data||[],actions]
}