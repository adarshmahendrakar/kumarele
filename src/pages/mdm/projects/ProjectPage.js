import React, { useState } from 'react'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useService } from './ProjectService';
import ProjectForm from './ProjectForm';
import PageContent1 from '../../../components/layout/PageContent1';
import {useConfirmation} from '../../../hooks/useConfirmation'
function ProjectPage() {

const title='Projects';

const [mydata,actions]=useService();

const Form=ProjectForm;

const [value,setValue]=useState({open:false,data:{}});

const {ConfirmPopup,openConfirm}=useConfirmation('Are you sure','once deleted not recoverd');
const addOrEdit=(v)=>{
  if(Object.keys(value?.data||{}).length==0){
    actions.add(v)?.then(d=>setValue(v=>({...v,open:false,data:{}})))
  }else{
    actions.update(v)?.then(setValue(v=>({...v,open:false,data:{}})))
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
            Header: "Project Code",
            accessor: "projectCode"
          },
          {
            Header: "Project Name",
            accessor: "projectName"
      },
      {
        Header: "Remarks",
        accessor: "remarks"
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

export default ProjectPage
