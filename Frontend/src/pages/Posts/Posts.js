import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';


import { useParams } from 'react-router-dom'


import PostCard from '../../Components/Cards/PostCard';
import './Post.css';


const Posts = () => {

  const [open, setOpen] = useState(false);
  const [snakOpen, setSnakOpen] = useState(false);
  const [snakText , setSnakText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([{}]);
  const [isLoaded, setIsLoaded] = useState(false);

  const {searchText} = useParams();
  const [previousSearchText, setPreviousSearchText] = React.useState('');

  const authToken = localStorage.getItem("sacAuthToken");
  
  const handleOpen = () => {
      setOpen(true);
    };
  const handleClose = () => {
      setOpen(false);
    };

    const searchPost = () => {
      
      axios({
        method: 'post',
        url: 'http://localhost:8080/searchPosts',
        params: {searchText: searchText},
        headers: {
          Authorization: "Bearer " + authToken
        }
      })
      .then(res => {
        const result = res.data;
        setPosts(result.ResponseData);
        console.log(result.ResponseData);
        console.log(posts);
        
      })
    };

  const loadPost = () => {
      
      axios({
        method: 'post',
        url: 'http://localhost:8080/posts',
        headers: {
          Authorization: "Bearer " + authToken
        }
      })
      .then(res => {
        const result = res.data;
        setPosts(result.ResponseData);
        console.log(result.ResponseData);
        console.log(posts);
        
      })
    };

  if(searchText!==previousSearchText && searchText!==undefined)
    {
      searchPost();
      setPreviousSearchText(searchText);
      setIsLoaded(true);
    }
  else if(searchText===undefined && isLoaded)
  {
    loadPost();
    setIsLoaded(false);
  }

  
    const snakClose = (event, reason) => {
      loadPost();
      if (reason === 'clickaway') {
        return;
      }
      setSnakOpen(false);
    };

  const addPost = () => {
      let formData = new FormData();
      formData.append("image",selectedImage);
      const userId = localStorage.getItem("sacUser");
      axios({
          method:"POST",
          url:`http://localhost:8080/addPost?postWonerId=${userId}&postDescription=${postText}`,
          data: formData,
          headers: {
            Authorization: "Bearer " + authToken
          }
      }).then(res => {
          const result = res.data;
          setSnakText(result.ResponseData);
          setSnakOpen(true);
        });
    };

    

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  useEffect(() => {
    loadPost();
  }, []);

  

  return (
    
    <div className="container">
    
   
      {
        posts.map(
          (post) => <PostCard 
                      postId={post.postId}
                      postDescription={post.postDescription}
                      postImage={post.postImage}
                      
                      postWonerId={post.postWonerId}
                      postWonerName={post.postWonerName}
                      postWonerPicture={post.postWonerPicture}
                      postDate={post.postDate}

           />)
      }
       

        <Fab className='post-btn' onClick={handleOpen} variant="extended" color="primary" aria-label="add" style={{
              margin: 0,
              top: 'auto',
              right: '5%',
              bottom: '5%',
              left: 'auto',
              position: 'fixed',
          }}>
        <AddIcon className='Fab-icon'  />
        <div className='Fab-txt'>Add Post</div>
        
      </Fab>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className='modal-box'>
          <h2 id="parent-modal-title">Add Your Post</h2>
          <Divider />
          <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={e => setSelectedImage(e.target.files[0])}
      />
      <label htmlFor="select-image">
        <Button variant="outlined" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
          <img src={imageUrl} alt={selectedImage.name} maxWidth="100" maxHeight="200" />
        </Box>
      )}
          <TextField
          id="filled-textarea"
          placeholder="What's on you mind"
          multiline
          variant="filled"
          style={{marginTop: '10px', width:'100%',maxHeight:'200px' , overflowY:'auto',scrollbarWidth: '0'}}
          onChange={e => setPostText(e.target.value)}
        />
        <br/>
        <Button onClick={e => {addPost(); setOpen(false);}} style={{marginTop: '10px',marginLeft: '40%'}} variant="contained">Post</Button>
          
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
export default Posts;