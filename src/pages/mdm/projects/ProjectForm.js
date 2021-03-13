import React from "react";
import FormLayout from "../../../components/layout/FormLayout";
import {useForm} from '../../../hooks/useForm'
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { ControlPointSharp } from "@material-ui/icons";
import {controls} from '../../../components/Inputs'
function ProjectForm({value, addorEdit, itemtypes: data, uomList ,view,...props}) {
  const addTitle='Add Projects'
  const editTitle='Edit Projects'
  const subtitle='  Fill in the fields to Add or Update.'
  const initialValues = {
      "projectName": "",
      "remarks": ""
    
   
  };
  const { values, handleInputChange, resetForm, setValue,setValues } = useForm(
    Object.keys(props?.state).length == 0 ? initialValues : props?.state,
    false,
    {}
  );

  const handleSubmit = (e) => {
    e.preventDefault();
   
     addorEdit(values)
   // resetForm(initialValues);
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
        label="projectName"
        required
        
        name={"projectName"}
        value={values?.projectName}
        onChange={handleInputChange}
      />
      <controls.MyInput
        label="remarks"
        required
        multiline
        rows={3}
        name={"remarks"}
        value={values?.remarks}
        onChange={handleInputChange}
      />
       
        
        </FormLayout>
  );
}

export default ProjectForm;
