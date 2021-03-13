import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues={}, validateOnChange = false, validate) {


    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value,files } = e.target
        setValues({
            ...values,
            [name]:(files && files[0]) || value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }
    const setValue = (name,value) => {
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = (v=initialFValues) => {
        setValues(v);
        setErrors({})
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
        setValue

    }
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}

