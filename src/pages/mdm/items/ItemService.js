import React, { useEffect, useReducer, useState } from 'react'
import { toast } from 'react-toastify';
import { Getdata, Postdata,Deletedata, PostFormdata } from '../../../api/Server';
export const useService=()=>{
    
    const [data,setData]=useState([]);
   
    useEffect(()=>{
Getdata('http://localhost:8186/product?fromSize=0&limit=1000').then(d=>setData(d?.product||[]))
    },[])

    const add=(v)=>new Promise((resolve,reject)=>{
        let {file,...others}=v
        fetch("http://localhost:8186/product",{
            method:"POST",
            headers:
            { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
            },
        body: JSON.stringify(others)}).then(d=>{
            if(d.status<300){
                toast.success("Submited Successfully")
               d.json().then(f=>
                //PostFormdata
                {
                    if(file){
                        var form=new FormData();
                    form.append("productCode",f.productCode)
                    form.append("specification",file)
                    fetch("http://localhost:8186/product/file",{
                        method:"PUT",
                        
                    body: form}).then(d=>{
                        if(d.status<300){
                            f={...f,specification:'view'}
                        }else{
                           d.json().then(f=>toast.error(f?.message||'went wrong')) ;
                        }
                         })
                    }
                    
                        
                    })
                    setData(data=>[...data,f])
                    resolve();
            }
            else{
                throw d.json().then(f=>toast.error(f.message))
            
            }
            
        }).catch(err=>toast.error(err.message))
       
    })

    
    const update=(v)=>new Promise((resolve,reject)=>{
        let {file,...others}=v
        fetch("http://localhost:8186/product",{
            method:"PUT",
            headers:
            { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
            },
        body: JSON.stringify({product:others})}).then(d=>{
            if(d.status<300){
                toast.success("Updated Successfully")
              
                    if(file){
                        var form=new FormData();
                    form.append("productCode",others?.productCode)
                    form.append("specification",file)
                    fetch("http://localhost:8186/product/file",{
                        method:"PUT",
                        
                    body: form}).then(d=>{
                        if(d.status<300){
                            others={...others,specification:'view'}
                        }else{
                           d.json().then(f=>toast.error(f?.message||'went wrong')) ;
                        }
                         })
                    }
                    
                        
                   
                    setData(data=>data.map(item1=>item1.productCode==others?.productCode?others:item1))
                    resolve();
            }
            else{
                throw d.json().then(f=>toast.error(f.message))
            
            }
            
        }).catch(err=>toast.error(err.message))
       
    })

    
    const deletec=(v)=>{
        
        Deletedata("http://localhost:8186/product","DELETE",v.productCode).then(d=>{
            toast.error("deleted Successfully")
      
       setData(data=>data.filter(item1=>item1.productCode!=v.productCode))
        })
       
        }
 const actions={add,update,deletec}
return [data||[],actions]
}