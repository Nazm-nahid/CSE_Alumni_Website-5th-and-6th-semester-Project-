import * as React from 'react';
import {Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { useState , useEffect } from 'react';

import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const options = ['Select Your Series','18 Series','16 Series','14 Series', '13 Series','12 Series', '11 Series','10 Series', '09 Series','08 Series', '07 Series'];

const SeriesInfo = () => {

  let [alumnus, setAlumnus] = useState([{}]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [title, setTitle] = React.useState("Series Info");
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const {searchText} = useParams();
  const [previousSearchText, setPreviousSearchText] = React.useState('');
  const authToken = localStorage.getItem("sacAuthToken");

  if(searchText!==previousSearchText && searchText!==undefined)
  {
    searchInfo();
    setPreviousSearchText(searchText);
  }

  function searchInfo()
  {
    setTitle("Search for '" + searchText +"'");
    axios({
      method: 'post',
      url: 'http://localhost:8080/searchSeriesInfo',
      params: {searchText: searchText},
      headers: {
        Authorization: 'Bearer ' + authToken
      }
    })
    .then(res => {
      const result = res.data;
      setIsLoaded(true);
      setAlumnus(result.ResponseData);
      
    })
    
  }

  function loadInfo(series)
  {
    
    axios({
      method: 'post',
      url: 'http://localhost:8080/seriesWiseList',
      params: {series: series},
      headers: {
        Authorization: 'Bearer ' + authToken
      }
    })
    .then(res => {
      const result = res.data;
      setAlumnus(result.ResponseData);
    })
  }
  
  useEffect(() => {
    if (searchText!=null) {
      searchInfo();
    }
  }, []);
   
  
  return (
  <div className="container">
    
   
<Box sx={{ flexGrow: 1 , paddingTop: "30px"}}>
<Grid container spacing={2} sx={{textAlign:'center', marginBottom:5 ,color:'green', border: '3px solid'}}>
    
    <Grid item xs={12}>
        <h1> {title}</h1>
        
    </Grid>
   
</Grid>
<Grid>
  <Grid>
  <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setIsLoaded(true);
          setTitle(newValue);
          loadInfo(parseInt(newValue.split(" ")[0]));
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 'auto', marginLeft:-2,marginBottom:-0.5 }}
        renderInput={(params) => <TextField {...params} label="Select Series" />}
      />
  </Grid>
  
</Grid>

 
   <Grid container spacing={2}>
      <Grid item xs={12}>
          
     {isLoaded ? (
          alumnus.map(
            (alumni) => 
            {
              const redirectLink = "/profile/"+alumni.alumniStudentId;
              return (<List sx={{ width: '100%', padding : "15px" ,marginBottom:"10px",bgcolor: 'background.paper' ,borderRadius:"10px" , boxShadow: '1px 1px 9px #cccccc' }}>
              <Link to={redirectLink} style={{textDecoration:'none'}}>
              <ListItemAvatar>
              <Avatar alt={alumni.alumniName} src={alumni.alumniPicture} />
              </ListItemAvatar>
              <h5 ><b>{alumni.alumniName}</b>({alumni.alumniJobField})</h5>
              </Link>
              <h6><b>{alumni.alumniJobTitle}</b> at <b>{alumni.alumniJobOrganization}</b> ,{alumni.alumniJobOrganizationBrunch}</h6>
              </List>) ;
            }
            )
        ):(
          null
        ) }
        
         
      </Grid>
      
      
    </Grid>
  
  
</Box>
    
  </div>
  )
}
export default SeriesInfo;