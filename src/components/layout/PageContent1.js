import React, { useState } from 'react'
import MyTable from '../tables/MyTable'
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
function PageContent1({columns,data,title,onClick,remove}) {
  return (
    <Box m={3}>
    <Grid container spacing={1}>
      <Grid item xs='12'>
    <Paper variant='outlined' >
     <Box display='flex' justifyContent='space-between' p={2}> <Typography variant='h5'>{title}</Typography>
    {!remove && <Button variant='contained' color='primary' onClick={onClick}>Add</Button>}</Box>
 </Paper>
 </Grid>
 <Grid item xs='12'>
    <Paper variant='outlined'>
  <MyTable columns={columns} data={data}/>
 </Paper>
 </Grid>
 </Grid>
 </Box>
)
}

  

export default PageContent1
