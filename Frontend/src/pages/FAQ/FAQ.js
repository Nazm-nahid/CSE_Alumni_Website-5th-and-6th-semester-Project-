import React from 'react'
import { useState} from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

const FAQ = () => {

  const [open, setOpen] = React.useState(false);
  const [snakOpen, setSnakOpen] = useState(false);
  const [snakText , setSnakText] = useState("");
  const handleOpen = () => {
      setOpen(true);
      setSnakText("Hudai");
    };
  const handleClose = () => {
      setOpen(false);
    };
  const snakClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnakOpen(false);
    };
  
  return (
    <div className="container">
    
      <List className='faqs'>
            <ListItem className='faq' alignItems="flex-start" >
               
                    <Typography
                        sx={{ display: 'block' ,fontWeight: 'bold'}}
                        component="span"
                        color="text.primary"
                    >
                    Is competitive programming necessary to crack interviews at product-based companies? 
                    </Typography>  
                     
            </ListItem>
            <ListItem className='faq' alignItems="flex-start">
                  <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="green"
                    >
                     You can read this blog https://workat.tech/problem-solving/article/competitive-programming-for-interviews-hdndsdeila4r \n -Sakil Monowar Vai
                     
                    </Typography>
            </ListItem>
            <Divider variant="inset" component="li" />
           
            
        </List>

        <Fab className='post-btn' onClick={handleOpen} variant="extended" color="primary" aria-label="add" style={{
              margin: 0,
              top: 'auto',
              right: '5%',
              bottom: '5%',
              left: 'auto',
              position: 'fixed',
          }}>
        <LiveHelpIcon className='Fab-icon'  />
        <div className='Fab-txt'>Ask</div>
        
      </Fab>
     
       
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className='modal-box'>
          <h2 id="parent-modal-title">Ask Your Question</h2>
          <Divider />
       
          <TextField
          id="filled-textarea"
          placeholder="What's on you mind"
          multiline
          variant="filled"
          style={{marginTop: '10px', width:'100%',maxHeight:'200px' , overflowY:'auto',scrollbarWidth: '0'}}
          // onChange={e => setPostText(e.target.value)}
        />
        <br/>
        <Button onClick={e => {/*addPost();*/ setOpen(false);}} style={{marginTop: '10px',marginLeft: '40%'}} variant="contained">Ask</Button>
          
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
export default FAQ;