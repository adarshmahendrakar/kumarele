import React from "react";
import FormLayout from "../../../components/layout/FormLayout";
import {useForm} from '../../../hooks/useForm'
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { ControlPointSharp } from "@material-ui/icons";
import {controls} from '../../../components/Inputs'
function Userform({value, addorEdit, roles ,view,...props}) {
  const addTitle='Add Users'
  const editTitle='Edit Users'
  const subtitle='  Fill in the fields to Add or Update.'
  const initialValues = {
    
    "userEmail": "",
    "userName": "",
    "userPassword": "",
    "userRoles":[]
    
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
        label="User Email"
        required
        name={"userEmail"}
        value={values?.userEmail}
        onChange={handleInputChange}
      />
      <controls.MyInput
        label="User Name"
        required
        
        name={"userName"}
        value={values?.userName}
        onChange={handleInputChange}
      />
       <controls.MyInput
        label="User Password"
        required
        type='password'
        name={"userPassword"}
        value={values?.userPassword}
        onChange={handleInputChange}
      />
      <controls.MySelect
        label="User Roles"
        required
        name={"userRoles"}
        isMulti={true}
        options={roles}
        value={values?.userRoles?.map(item=>({...item,label:item.roleName,value:item.roleName}))}
        getOptionLabel={(option) => option.roleName}
        getOptionValue={(option) => option.roleName}
        placeholder={values?.Roles || "Select Roles"}
        onChange={(v)=>setValue("userRoles",v)}
      /> 
       
      
      
        
        </FormLayout>
  );
}

export default Userform;
