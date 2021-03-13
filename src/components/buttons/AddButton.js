import React from 'react'
import {Add as AddIcon,Edit as EditIcon,Delete as DeleteIcon,Visibility as ViewIcon} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { IconButton, Tooltip } from '@material-ui/core';

export function AddButton({children,...others}) {
    return (
        <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                 startIcon={<AddIcon />}
                 {...others}
                >
                  {children}
                </Button>
    )
}
export function EditButton({children,...others}) {
    return (
        <Tooltip title='edit'>
        <IconButton
                  size="small"
                  style={{color:'gold'}}
                 
                 {...others}
                 
                >
               <EditIcon />
                </IconButton>
                </Tooltip>
    )
}

export function DeleteButton({children,...others}) {
    return (
        <Tooltip title='delete'>
        <IconButton
                  size="small"
                  style={{color:'red'}}
                 {...others}
                >
             <DeleteIcon />
                </IconButton>
                </Tooltip>
    )
}
export function ViewButton({children,...others}) {
    return (
        <Tooltip title='view'>
        <IconButton
                  size="small"
                  style={{color:'skyblue'}}
                 {...others}
                >
             <ViewIcon />
                </IconButton>
                </Tooltip>
    )
}

