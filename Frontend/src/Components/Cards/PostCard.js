import * as React from 'react';
import {Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors'; 
//import MoreVertIcon from '@mui/icons-material/MoreVert';

import './PostCard.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  display: !expand ? 'flex' : 'none',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
  duration: theme.transitions.duration.shortest,
  }),
}));




export default function PostCard(props) {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const pDate = new Date(props.postDate);
  const postDate = pDate.getDate() +" "+months[pDate.getMonth()]+" "+pDate.getFullYear();


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const redirectLink = "/profile/"+props.postWonerId;
  
  return (
    <Card className="post-card" id= { props.postId }>
      <Link to={redirectLink} style={{textDecoration: "none" }} >
        <CardHeader 
          avatar={
            <Avatar alt={ props.postWonerName} src={ props.postWonerPicture} sx={{ bgcolor: red[500] }} aria-label="recipe"/> 
          }
          title={ <b>{props.postWonerName}</b> }
          subheader={postDate}
        />
      </Link>
      {props.postImage!=null && 
        <CardMedia
        component="img"
        height="200"
        image={ props.postImage }
        alt="Picture"
      />}
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           { props.postDescription }
          {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <Typography variant="body2" color="#0d6efd" id='seemore' >See More</Typography>
          
        </ExpandMore> */}
        </Typography>
        
      </CardContent>
     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}