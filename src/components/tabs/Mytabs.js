import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MyTable from '../tables/MyTable'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SimpleFom from '../forms/SimpleFom';
import { Container, Paper } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root:{flexGrow: 1,},
  tabs: {
    
    '& .MuiButtonBase-root':{
        margin:'0 20px',
        border:'1px solid'+theme.palette.primary.main,
        boxShadow:theme.shadows[10]
    },
    '& .Mui-selected':{
        backgroundColor:theme.palette.primary.main,
        color:'#fff'
    },
    '& .MuiTabs-indicator':{
        display:'none'
    }
  },
}));

export default function SimpleTabs({label1,label2,form,table,setvalue}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
   
  };

  return (
    <div className={classes.root}>
      
      <Box mx={3}>  <Tabs  value={value}  onChange={handleChange} aria-label="simple tabs example">
          <Tab label={label1} {...a11yProps(0)} />
          <Tab label={label2} {...a11yProps(1)} />
        </Tabs>
     </Box>
      <TabPanel value={value} index={0}>
      <Paper elevation={4}>{table}</Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box maxWidth={'960px'} > <Paper  elevation={4}><Box p={5}> {form}</Box></Paper></Box>
      </TabPanel>
    </div>
  );
}
