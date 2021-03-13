import { toast } from "react-toastify";

const baseurl='https://cors-anywhere.herokuapp.com/http://keproject-env.eba-i6rhizxy.ap-south-1.elasticbeanstalk.com';
//https://cors-anywhere.herokuapp.com/
//const baseurl='http://keproject-env.eba-i6rhizxy.ap-south-1.elasticbeanstalk.com';
const Getdata=async(url='')=>
{
 try
 {
  const response= await fetch(url,{headers:
    { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
    }})     
  console.log(response)
  return await response.json();
  }catch(err){
  console.log(err);
 }
}
const GetTextData=async(url='')=>
{
 try
 {
  const response= await fetch(url)      
  console.log(response)
  return await response.text();
  }catch(err){
  console.log(err);
 }
}
const Postdata=async(url = '', mymethod='POST',data = {})=> {
//alert(JSON.stringify(data));
console.log(mymethod)
try{
const response = await fetch(url, {
method:mymethod,
headers:
{ 
'Content-Type': 'application/json',
'Access-Control-Allow-Origin':'*'
},
           body: JSON.stringify(data)}); 
          // body: data}); 
          if(response.status<300){
            const res=await response.json()
             return res||{}
            }
             else {
              const err=await response.json();
              
             throw err
              return false
            }
          }
          catch(e){
            //console.log(e)
toast.error(e.message)
          }
}
const Deletedata=async(url = '', mymethod='DELETE',data = {})=> {
 
  const response = await fetch(url, {
  method:mymethod,
  headers:
  { 
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin':'*'
  },
             body: data}); 
            
               return "";
  }
const PostFormdata=async(url = '', method='POST',data = {})=> 
{
   var formData = new FormData();
   Object.keys(data).map(item=>formData.append(item,data[item]));
  const response = await fetch(url, {method:method,headers: 
  {
    'Access-Control-Allow-Origin':'*'
   },
   body: formData});
  //body: data});

  return await response.json();
}
    
export  {Getdata,Postdata,PostFormdata,GetTextData,Deletedata}