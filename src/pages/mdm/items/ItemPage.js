import React, { useEffect, useState } from 'react'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useService } from './ItemService';
import UsersForm from './ItemForm';
import PageContent1 from '../../../components/layout/PageContent1';
import { useConfirmation } from '../../../hooks/useConfirmation';
import { Getdata } from '../../../api/Server';
function ItemPage() {

const title='Items';

const [mydata,actions]=useService();

const Form=UsersForm;

const [value,setValue]=useState({open:false,data:{}});
const [uomList,setUomList]=useState([])
useEffect(()=>{
  Getdata('http://localhost:8186/product/uom').then(d=>setUomList(d||[]))

},[])


const {ConfirmPopup,openConfirm}=useConfirmation('Are you sure','once deleted not recoverd');
const addOrEdit=(v)=>{
  if(Object.keys(value?.data||{}).length==0){
    actions.add(v).then(d=>setValue(v=>({...v,open:false,data:{}})))
  }else{
    actions.update(v).then(d=>setValue(v=>({...v,open:false,data:{}})))
  }
    ;
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
            Header: "Item Code",
            accessor: "productCode"
          },
          {
            Header: "Item Name",
            accessor: "productName"
      },
      {
        Header: "Item Type",
        accessor: "productType"
      },
      {
        Header: "UOM",
        accessor: "uom"
  },
  {
    Header: "HSN Code",
    accessor: "hsnCode"
  },
  {
    Header: "Specifications",
    accessor: "specification",
    Cell: ({ row }) => (row?.original?.specification &&<a href={"http://localhost:8186/multimedia/product?productCode="+row?.original?.productCode} target='_blank'>{row?.original?.specification||"view"}</a>)
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
    uomList={uomList}
    products={mydata}
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

export default ItemPage
