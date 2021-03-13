import React from "react";
import FormLayout from "../../../components/layout/FormLayout";
import {useForm} from '../../../hooks/useForm'
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { ControlPointSharp } from "@material-ui/icons";
import {controls} from '../../../components/Inputs'
function ItemForm({value, addorEdit, products,itemtypes: data, uomList ,view,...props}) {
  const addTitle='Add Items'
  const editTitle='Edit Items'
  const subtitle='  Fill in the fields to Add or Update.'
  const initialValues = {
    
      "hsnCode": "",
      "productAssembly": [
       
      ],
      "productName": "",
      "productType":'',
      "remarks": "",
      "specification": "",
      "uom": ""
    
  };
  const { values, handleInputChange, resetForm, setValue,setValues } = useForm(
    Object.keys(props?.state).length == 0 ? initialValues : props?.state,
    false,
    {}
  );

  const handleSubmit = (e) => {
    e.preventDefault();
   
     addorEdit(values)
    //resetForm(initialValues);
  };
  const getProjectCode = (v) => {
   
    
   
    setValue("productType", v.value);
 
  };
  const setUom = (v) => {
   // alert(JSON.stringify(v))
    setValue("uom", v.uomNotaion);
  };
 const productTypes=[
   {label:'ADMIN',value:'ADMIN'},
   {label:'CIVIL',value:'CIVIL'},
   {label:'ELECTRICAL',value:'ELECTRICAL'},
   {label:'ERECTION',value:'ERECTION'}
 ]




 

  return (
    <FormLayout
    addTitle={addTitle}
    editTitle={editTitle}
    subtitle={subtitle}
    handleSubmit={handleSubmit}
    {...props}
    >
         
         {values?.productCode && <controls.MyInput
      label="item code"
      required
      disabled
      name={"productCode"}
      value={values?.productCode}
      onChange={handleInputChange}
    />}
      <controls.MyInput
        label="item Name"
        required
        
        name={"productName"}
        value={values?.productName}
        onChange={handleInputChange}
      />
       <controls.MySelect
        label="uom"
        required
        name={"uom"}
        
        options={uomList}
        getOptionLabel={(option) => option.uomName}
        getOptionValue={(option) => option.uomNotaion}
        placeholder={values?.uom || "Select Uom"}
        onChange={setUom}
      /> 
      <controls.MyInput
        label="hsncode"
        name={"hsnCode"}
        
        value={values?.hsnCode}
        onChange={handleInputChange}
      />
       <controls.MySelect
        label="ItemType"
        name={"productType"}
        options={productTypes}
        placeholder={values?.productType || "Select Item Type"}
        onChange={(v) => {
          getProjectCode(v);
        }}
      /> 

      <controls.MyInput
        label="specifications"
         
        type="file"
        name={"file"}
        onChange={handleInputChange}
      />
      <controls.MySelect
        label="Product Assambly"
        required
        name={"productAssembly"}
        isMulti={true}
        options={products}
        value={values?.productAssembly?.map(item=>({...item,label:item.productName,value:item.productCode}))}
        getOptionLabel={(option) => option.productName}
        getOptionValue={(option) => option.productCode}
        placeholder={values?.productAssembly || "Select Uom"}
        onChange={(v)=>setValue("productAssembly",v)}
      /> 
        
        </FormLayout>
  );
}

export default ItemForm;
