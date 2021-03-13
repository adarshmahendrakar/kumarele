import React, { useState } from 'react'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useService } from './SupplierService';
import SupplierForm from './SupplierForm';
import PageContent1 from '../../../components/layout/PageContent1';
import {useConfirmation} from '../../../hooks/useConfirmation'
function SupplierPage() {

const title='Supplier';

const [mydata,actions]=useService();
const {ConfirmPopup,openConfirm}=useConfirmation('Are you sure','once deleted not recoverd');
const Form=SupplierForm;

const [value,setValue]=useState({open:false,data:{}});

const addOrEdit=(v)=>{
 
if(Object.keys(value?.data||{}).length==0){
  actions.add(v)?.then(d=>setValue(v=>({...v,open:false,data:{}})))
}else{
  actions.update(v)?.then(d=>setValue(v=>({...v,open:false,data:{}})))
}

}
const handleEdit=(da)=>{  
  setValue(v=>({...v,open:true,data:da}));
} 
const handleDelete=(da)=>{
 
  openConfirm(()=>actions.deletec(da))
}  
const data=React.useMemo(()=>{
    return mydata;
},[mydata])
const columns = React.useMemo(
    () => [
     
          {
            Header: "Code",
            accessor: "vendorCode"
          },
          {
            Header: "Name",
            accessor: "vendorName"
      },
      {
        Header: "Email ",
        accessor: "vendorEmail"
      },
      {
        Header: "Primary Address",
        accessor: "vendorPrimaryAddress"
  },
  
  
     
          {
            Header: "Actions",
            Cell: ({ row }) => (
              <>
             <EditIcon
              onClick={() => handleEdit(row?.original)}
              style={{ margin: "5px", cursor: "pointer" }}
            /> 
            <DeleteIcon
              onClick={() => handleDelete(row?.original)}
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
  <>  
 <PageContent1
 title={title}
 onClick={()=>setValue({open:true,data:{}})}
 data={data}
 columns={columns}
 />
 <ConfirmPopup/>
 </>
)
}

  
}

export default SupplierPage
