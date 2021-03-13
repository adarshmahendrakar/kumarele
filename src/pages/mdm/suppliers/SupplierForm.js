import React from "react";
import FormLayout from "../../../components/layout/FormLayout";
import {useForm} from '../../../hooks/useForm'
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { ControlPointSharp } from "@material-ui/icons";
import {controls} from '../../../components/Inputs'
function ItemForm({value, addorEdit, itemtypes: data, uomList ,view,...props}) {
  const addTitle='Add Suppliers'
  const editTitle='Edit Suppliers'
  const subtitle='  Fill in the fields to Add or Update.'
  const initialValues = {
    
      "vendorEmail": "",
      "vendorGSTIN": "",
      "vendorName": "",
      "vendorPhone": "",
      "vendorPocName": "s",
      "vendorPrimaryAddress": "",
      "vendorQuarternaryAddress": "",
      "vendorSecondaryAddress": "",
      "vendorTertiaryAddress": ""
    
  };
  const { values, handleInputChange, resetForm, setValue,setValues } = useForm(
    Object.keys(props?.state).length == 0 ? initialValues : props?.state,
    false,
    {}
  );

  const handleSubmit = (e) => {
    e.preventDefault();
   
   addorEdit(values);
    
    
  };
 





 

  return (
    <FormLayout
    addTitle={addTitle}
    editTitle={editTitle}
    subtitle={subtitle}
    handleSubmit={handleSubmit}
    {...props}
    >
         
            <controls.MyInput
        label="Vendor Email"
        required
        name={"vendorEmail"}
        value={values?.vendorEmail}
        onChange={handleInputChange}
      />
      <controls.MyInput
        label="vendorGSTIN"
        required
        
        name={"vendorGSTIN"}
        value={values?.vendorGSTIN}
        onChange={handleInputChange}
      />
       <controls.MyInput
        label="Vendor Name"
        required
        
        name={"vendorName"}
        value={values?.vendorName}
        onChange={handleInputChange}
      />
       <controls.MyInput
        label="Vendor Phone"
        required
        
        name={"vendorPhone"}
        value={values?.vendorPhone}
        onChange={handleInputChange}
      />
       <controls.MyInput
        label="Vendor Primary Address"
        required
        multiline
        rows={3}
        name={"vendorPrimaryAddress"}
        value={values?.vendorPrimaryAddress}
        onChange={handleInputChange}
      />
       <controls.MyInput
        label="Vendor Quarternary Address"
        required
        multiline
        rows={3}
        name={"vendorQuarternaryAddress"}
        value={values?.vendorQuarternaryAddress}
        onChange={handleInputChange}
      />
       <controls.MyInput
        label="Vendor Secondary Address"
        required
        multiline
        rows={3}
        name={"vendorSecondaryAddress"}
        value={values?.vendorSecondaryAddress}
        onChange={handleInputChange}
      />
       <controls.MyInput
        label="Vendor Tertiary Address"
        required
        multiline
        rows={3}
        name={"vendorTertiaryAddress"}
        value={values?.vendorTertiaryAddress}
        onChange={handleInputChange}
      />
        
        </FormLayout>
  );
}

export default ItemForm;
