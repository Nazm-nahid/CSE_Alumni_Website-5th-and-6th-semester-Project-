import React, {  useState,useEffect } from 'react';

import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';


import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';

const Navbar = () => {

   const [searchOpen, setSearchOpen] = useState("search-container");
   const [OptionOpen, setOptionOpen] = useState("nav-item");
   const [AvatarOpen, setAvatarOpen] = useState("nav-item");
   const [searchOpenOption, setSearchOpenOption] = useState("fas fa-search");
   const [operation, setOperation] = useState("/");
   const [redirectProfileLink, setRedirectProfileLink] = useState("/");
   const [anchorEl, setAnchorEl] = useState(null);
   const [isLoggedIn,setIsLoggedIn] = useState(false);
   const [isLoggedInLoad,setIsLoggedInLoad] = useState(true);
   const navigate = useNavigate();

   const authToken = localStorage.getItem("sacAuthToken");

   const pathname = window.location.pathname;

   const loginLoad = () =>{
    if (authToken!=null) {
      setIsLoggedIn(true);
     const userId = localStorage.getItem("sacUser");
     setRedirectProfileLink("/profile/"+ userId);
    }
    else {
      navigate("signin");
    }
   } 

   if(pathname==='/' && isLoggedInLoad)
   {
    loginLoad();
    setIsLoggedInLoad(false);
   }
   else if(pathname==='/signin' && !isLoggedInLoad)
   {
    setIsLoggedInLoad(true);
   }
   
   useEffect(() => {
    loginLoad();
  }, []);

  const logout = () => {
    localStorage.removeItem("sacUser");
    localStorage.removeItem("sacAuthToken");
    setIsLoggedIn(false);
    navigate("signin");
  };
  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickMobile = (event) => {
    setAnchorEl(event.currentTarget);
    setOptionOpen("hiddenClass");
    setSearchOpen("hiddenClass");
    setAvatarOpen("hiddenClass");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   const search=()=>{
    const searchText = document.getElementById('searchText').value;
    navigate(operation+searchText);
   };

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
      
      <img alt='RUET CSE ALUMNI NETWORK' src="http://localhost:8080/resource/images?imageName=appLogo.png" width="150" height="40"/>
    
      </NavLink>

      <button style={{border:"none" , boxShadow:"none"}}
         className="navbar-toggler"
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        {
          isLoggedIn 
          ?
          <i id='fafasearch' className={searchOpenOption} onClick={()=>{setOptionOpen("hiddenClass");setAvatarOpen("hiddenClass");setSearchOpen("search-container");}}></i>
          : null
        }
        {
          isLoggedIn 
          ?
          <IconButton
                        onClick={handleClickMobile}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                      >
                        <Avatar sx={{ width: 32, height: 32 ,margin:'10px'}}><Avatar /></Avatar>
          </IconButton>
         : null
        }
        
        <i id='fafabar' className="fas fa-bars text-grey" onClick={()=>{setSearchOpen("hiddenClass");setAvatarOpen("hiddenClass") ;setOptionOpen("nav-item");}}></i>
      </button>
 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
            </div>
            {
              isLoggedIn 
              ?
              <li>
            <div className={searchOpen}>
              <input type="text" placeholder="Search.." id ="searchText" name="search" />
              
              <button onClick={search}><i className="fa fa-search"></i></button>
              
              
            </div>
            </li>
              : null
            }
            {
              isLoggedIn 
              ?
              <li className={OptionOpen} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <NavLink className="nav-link" to="/" onClick={()=>{setOperation("/") ;setSearchOpen("search-container"); setSearchOpenOption("fas fa-search")}} exact = "true">
                <b>Home</b>
              </NavLink>
            </li>
              : null
            }
            {
              isLoggedIn 
              ?
              <li className={OptionOpen} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <NavLink className="nav-link" to="/seriesInfo"  onClick={()=>{setOperation("/seriesInfo/") ;setSearchOpen("search-container");setSearchOpenOption("fas fa-search") }} exact = "true">
                <b>Series Info</b>
              </NavLink>
            </li>
              : null
            }

            <li className={OptionOpen} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <NavLink className="nav-link" to="/about" onClick={()=>{setSearchOpen("hiddenClass"); setSearchOpenOption("hiddenClass")  }} exact = "true">
                <b>About</b>
              </NavLink> 
            </li>
            {
              isLoggedIn 
              ?
              <li className={AvatarOpen} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              {/* <NavLink className="nav-link" to="/signin" onClick={()=>{setSearchOpen("hiddenClass"); setSearchOpenOption("hiddenClass")  }} exact = "true">
                <b>SignIn</b>
              </NavLink>  */}
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 ,margin:'10px'}}><Avatar /></Avatar>
                </IconButton>
              </Tooltip>
            </li>
              : null
            }

{
              isLoggedIn 
              ?
              null
              : <li className={OptionOpen} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <NavLink className="nav-link" to="/signin" onClick={()=>{setSearchOpen("hiddenClass"); setSearchOpenOption("hiddenClass")  }} exact = "true">
                <b>SignIn</b>
              </NavLink> 
            </li>
            }
            

            
        </ul>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <NavLink className="nav-link" to= {redirectProfileLink} >
        <MenuItem>
          <Avatar /> Profile
          
        </MenuItem>
        </NavLink>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </div>
  </nav>
  )
}
export default Navbar;