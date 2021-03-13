import React, { useState } from "react";
import FormLayout from "../../../components/layout/FormLayout";
import {useForm} from '../../../hooks/useForm'
import CreatableSelect from "react-select/creatable";
import {controls} from '../../../components/Inputs'
function ItemForm({value, addorEdit, itemtypes: data, uomList ,view,...props}) {
  const [inputValue,setInputValue]=useState('')
  const addTitle='Add Fields'
  const editTitle='Edit Fields'
  const subtitle='  Fill in the fields to Add or Update.'
  const initialValues = {
   fieldCode:'',
   fieldName:'',
   fieldValues:[]
  };
  const { values, handleInputChange, resetForm, setValue,setValues } = useForm(
    Object.keys(props?.state).length == 0 ? initialValues : props?.state,
    false,
    {}
  );

  const handleSubmit = (e) => {
    e.preventDefault();
   
     addorEdit(values)
    resetForm(initialValues);
  };

  const handleKeyDown = (event) => {
   // const { inputValue, value } = state;

   // if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        // setState({
        //   inputValue: "",
        //   value: [...value, createOption(inputValue)]
        // });
        setValue("fieldValues",[...(values?.fieldValues||[]),inputValue])
        setInputValue('')
        event.preventDefault();
    }
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
        label="Field Name"
        
        disabled
        name={"fieldName"}
        value={values?.fieldName}
        onChange={handleInputChange}
      />
      
      
      
       <controls.MySelect
        label="fieldValues"
        name={"fieldValues"}
        inputValue={inputValue}
        onInputChange={(v)=>setInputValue(v)}
       isMulti
        onKeyDown={handleKeyDown}
        value={values?.fieldValues?.map(d=>({label:d,value:d}))}
        options={values?.fieldValues?.map(d=>({label:d,value:d}))}
        placeholder={values?.materialTypes || "Select field Value"}
        onChange={v=>setValue("fieldValues",v.value)}
      /> 

     

        
        </FormLayout>
  );
}

export default ItemForm;
