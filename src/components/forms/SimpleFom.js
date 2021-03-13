
import React from 'react'
import { useForm } from '../../hooks/useForm'
import {controls} from '../Inputs'

export default ({value,addorEdit}) =>{
    const initialValues={CurrencyName:'',categoryName:''}
const {values,handleInputChange}=useForm(( Object.keys(value||{})?.length==0)?initialValues:value,false,{})


     const handleSubmit=(e)=>{
         e.preventDefault();
         addorEdit(values)

     }
    return (
        <form onSubmit={handleSubmit}>
            <controls.MyInput1 label='CurrencyName' name={'CurrencyName'}  value={values?.CurrencyName} onChange={handleInputChange}/>
            <controls.MyInput1 label='categoryName' name={'categoryName'}  value={values?.categoryName} onChange={handleInputChange}/>
{/*            
            <controls.Button type='submit' text='Submit'/> */}
        </form>
    )
}

