import * as React from 'react';

import axios from 'axios';

import { useState } from 'react';

import { useParams } from 'react-router-dom'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const Profile = () => {


    const {id} = useParams();
    const [previousId, setPreviousId] = useState(0);
    const [open, setOpen] = useState(false);
    const [profileData, setprofileData] = useState({});
    const [currentJobs, setcurrentJobs] = useState([{}]);
    const [previousJobs, setpreviousJobs] = useState([{}]);
    const [snakOpen, setSnakOpen] = useState(false);
    const [snakText , setSnakText] = useState("");

    
    const authToken = localStorage.getItem("sacAuthToken");
    const studentId = localStorage.getItem("sacUser");

    const handleOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
      };

    function leftJob(jobId) {
        
        axios({
            method:"POST",
            url:`http://localhost:8080/leftJob?jobId=${jobId}`,
            headers: {
              Authorization: "Bearer " + authToken
            }
        }).then(res => {
            const result = res.data;
            setSnakText(result.ResponseData);
            setSnakOpen(true);
            loadProfileInfo();
          });
      };

    function addJob() { 

      
      const jobFieldAdd = document.getElementById('jobFieldAdd').value;
      const jobTitleAdd = document.getElementById('jobTitleAdd').value;
      const jobOrganizationAdd = document.getElementById('jobOrganizationAdd').value;
      const jobBrunchAdd = document.getElementById('jobBrunchAdd').value;
        
        axios({
            method:"POST",
            url:`http://localhost:8080/addJob?studentId=${studentId}&jobField=${jobFieldAdd}&jobTitle=${jobTitleAdd}&jobOrganization=${jobOrganizationAdd}&jobBrunch=${jobBrunchAdd}`,
            headers: {
              Authorization: "Bearer " + authToken
            }
        }).then(res => {
            const result = res.data;
            setSnakText(result.ResponseData);
            setSnakOpen(true);
            loadProfileInfo();
          });
      };

    function loadProfileInfo()
    {
        axios({
            method: 'post',
            url: 'http://localhost:8080/profileInfo',
            params: {studentId: id},
            headers: {
              Authorization: 'Bearer ' + authToken
            }
          })
          .then(res => {
            const result = res.data;
            setprofileData(result.ResponseData);
            setcurrentJobs(result.ResponseData.alumniCurrentJobs);
            setpreviousJobs(result.ResponseData.alumniPreviousJobs);
          })
    }

    const snakClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnakOpen(false);
      };

    if(previousId!==id)
    {
      loadProfileInfo();
      setPreviousId(id);
    }
    // useEffect(() => {
        
    
    //   }, []);

  return (
    <div className="container">
    
    <Box sx={{ flexGrow: 1 , marginTop: "60px",paddingLeft:"50px", paddingTop:"50px", borderRadius:"40px" , boxShadow: '1px 2px 9px #000000'}}>
    <Stack
        direction={{ xs: 'column'}}
        spacing={{ xs: 1, md: 2 }}
      >
        <List>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 1, md: 2 }}
            >
                <List>
                    <Avatar
                        alt={profileData.alumniName}
                        src={profileData.alumniPicture}
                        sx={{ 
                            width:{
                                xs:75, //0
                                sm: 120,//600
                                md:150 //900
                                // lg: //1200
                                // xl: //1536
                            }, 
                            height:{
                                xs:75, 
                                sm: 120,
                                md:150
                            },
                            marginLeft:{
                                xs:"30%",
                                md:"0%"
                            }
                        }}
                    />
                </List>
                <List style={{marginTop:
                    {
                                xs:0,
                                md:70
                    }
                    }}>
                    <h2 >{profileData.alumniName}</h2>
                    <h6>{profileData.alumniStudentId}</h6>
                </List>
            </Stack>
            <Divider />
        </List>
        <List>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 1, md: 2 }}
            >
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start" sx={{color:'blue'}}>
                       <h4><b>Contact Information</b></h4>
                    </ListItem>
                    <Divider variant="inset"  />
                    <ListItem alignItems="flex-start">
                       <h6><b> Available To Contact :</b> {profileData.alumniAvailableContactHour}</h6>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                       <h6><b> Contact no :</b> {profileData.alumniContact}</h6>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                       <h6><b> Email :</b> {profileData.alumniEmail}</h6>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                       <h6><b> Linkedin :</b> {profileData.alumniLinkedin}</h6>
                    </ListItem>
                    
                    
                    
                </List>
        
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start" sx={{color:'blue'}}>
                       <h4><b>Current Jobs</b></h4>
                       {studentId===id ? <Button onClick={handleOpen} variant="contained" color="success" disableElevation>
                                Add Job
                            </Button> : null}
                       
                    </ListItem>
                    <b><hr></hr></b>

                    {
                        currentJobs.map(
                        (job) => 
                        <div>
                            <h6><b> Job Field :</b> {job.alumniJobField}</h6>
                            <h6><b> Job Title :</b> {job.alumniJobTitle}</h6>
                            <h6><b> Organization/Institute :</b> {job.alumniJobOrganization}</h6>
                            <h6><b> Brunch :</b> {job.alumniJobOrganizationBrunch}</h6>
                            {studentId===id ? <Button onClick={()=>{leftJob(job.alumniJobId);}} variant="contained" color="error" disableElevation>
                                Left Job
                            </Button> : null}
                            
                            <hr></hr><br></br>
                        </div>
                         
                    )
                    }
                    
                </List>
        
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start" sx={{color:'blue'}}>
                       <h4><b>Previous Jobs</b></h4>
                    </ListItem>
                    <b><hr></hr></b>

                    {
                        previousJobs.map(
                        (job) => 
                        <div>
                            <h6><b> Job Field :</b> {job.alumniJobField}</h6>
                            <h6><b> Job Title :</b> {job.alumniJobTitle}</h6>
                            <h6><b> Organization/Institute :</b> {job.alumniJobOrganization}</h6>
                            <h6><b> Brunch :</b> {job.alumniJobOrganizationBrunch}</h6>
                            
                            <hr></hr><br></br>
                        </div>
                         
                    )
                    }
                    
                </List>
            </Stack>
        </List>
          
        
        </Stack>
    </Box>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className='modal-box'>
          <h2 id="parent-modal-title">Add Job</h2>
          <Divider />
          
      
      <TextField
          id="jobFieldAdd"
          placeholder="Example: Software Engineering"
          multiline
          variant="filled"
          style={{marginTop: '10px', width:'100%',maxHeight:'200px' , overflowY:'auto',scrollbarWidth: '0'}}
          
        />
        <label>Job Field </label>
        <br/>
        
      <TextField
          id="jobTitleAdd"
          placeholder="Example: Software Engineer"
          multiline
          variant="filled"
          style={{marginTop: '10px', width:'100%',maxHeight:'200px' , overflowY:'auto',scrollbarWidth: '0'}}
          
        />
        <label >Job Title </label>
        <br/>
    
      <TextField
          id="jobOrganizationAdd"
          placeholder="Example: Samsung"
          multiline
          variant="filled"
          style={{marginTop: '10px', width:'100%',maxHeight:'200px' , overflowY:'auto',scrollbarWidth: '0'}}
          
        />
        <label>Job Organization </label>
        <br/>
        
      <TextField
          id="jobBrunchAdd"
          placeholder="Example: Dhaka , Bangladesh"
          multiline
          variant="filled"
          style={{marginTop: '10px', width:'100%',maxHeight:'200px' , overflowY:'auto',scrollbarWidth: '0'}}
          
        />
        <label>Job Brunch </label>
        <br/>

        <Button onClick={e => {addJob(); setOpen(false);}} style={{marginTop: '10px',marginLeft: '40%'}} variant="contained">Submit</Button>
          
        </Box>
      </Modal> 
      

    <Snackbar
        open={snakOpen}
        autoHideDuration={2000}
        onClose={snakClose}
        message={snakText}
      /> 
    </div>
  )
}
export default Profile;

