import React, { useState } from 'react'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useService } from './FieldService';
import FieldForm from './FieldForm';
import PageContent1 from '../../../components/layout/PageContent1';
function ItemPage() {

const title='Fields';

const [mydata,actions]=useService();

const Form=FieldForm;

const [value,setValue]=useState({open:false,data:{}});

const addOrEdit=(v)=>{
if(Object.keys(value).length==0){
  actions.add(v)
}else{
  actions.update(v)
}
  setValue(v=>({...v,open:false,data:{}}));
}
const handleEdit=(da)=>{  
  setValue(v=>({...v,open:true,data:da}));
} 
const handleDelete=(da)=>{
 
  actions.deletec(da)
}  
const data=React.useMemo(()=>{
    return mydata;
},[mydata])
const columns = React.useMemo(
    () => [
     
          {
            Header: "Field Code",
            accessor: "fieldCode"
          },
    
  {
    Header: "Field Name",
    accessor: "fieldName"
  },
  
     
          {
            Header: "Actions",
            Cell: ({ row }) => (
              <>
             <EditIcon
              onClick={() => handleEdit(row?.original)}
              style={{ margin: "5px", cursor: "pointer" }}
            /> 
           
              </>
            )
          }
        ]
      ,
    []
  );
if(Boolean(value?.open)){
  return (
    <Form
    cancel={()=>setValue({open:false,data:{}})}
    state={value?.data}
    addorEdit={addOrEdit}
    />
 
)}
else{
  return (
    
 <PageContent1
 title={title}
 onClick={()=>{}}
 data={data}
 remove
 columns={columns}
 />
)
}

  
}

export default ItemPage
