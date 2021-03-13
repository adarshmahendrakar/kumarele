import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
function FormLayout({addTitle,handleSubmit,editTitle,subtitle,state,cancel,children}) {
  
  return (
   <Container style={{marginTop:'70px'}}>
      <Paper variant='outlined' style={{paddingTop:'20px'}}>
       
          <Typography variant='h5' style={{textAlign:'center'}}>
            {Object?.keys(state || {})?.length == 0 ? addTitle : editTitle
            }
          </Typography>
          <form onSubmit={handleSubmit}>
          <DialogContent>
            <Typography variant='body1' color='textSecondary' style={{textAlign:'center'}}>
              {subtitle}
            </Typography>
            {children}
         </DialogContent>
          <DialogActions>
            <Button onClick={cancel} color="primary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              {
              Object?.keys(state || {})?.length == 0 ? "Add" : "Update"
              }
            </Button>
          
          </DialogActions>
          </form>
      </Paper>
      </Container>
    
  );
}

export default FormLayout;
