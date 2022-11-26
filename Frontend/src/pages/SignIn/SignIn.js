import React, { useState } from 'react';

import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import {
  MDBContainer,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


import { useNavigate } from 'react-router-dom';

function SignIn() {

  const [justifyActive, setJustifyActive] = useState('tab1');
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [email, setEmail] = useState("");
  const [tab5message, setTab5Message] = useState("");

  const [snakOpen, setSnakOpen] = useState(false);
  const [snakText , setSnakText] = useState("");

  const navigate = useNavigate();


  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const login = () => {
    const studentId = document.getElementById('loginId').value;
    const password = document.getElementById('loginPassword').value;
    axios({
      method:"POST",
      url:`http://localhost:8080/authenticate`,
      params: {'Content-Type': 'application/json'},
      data:{
        username : studentId,
        password : password
      }
    }).then(res => {
      const result = res.data;
      if(result.ResponseCode==='1')
        {
          
          const authToken = result.ResponseData.authToken.jwt;
          localStorage.setItem("sacAuthToken",authToken);
          localStorage.setItem("sacUser",result.ResponseData.memberId);
          navigate("/");
          return;
        }
      else
      {
        setSnakText(result.ResponseData);
        setSnakOpen(true);
      }
      
    });
  }

  const register = () => {

    const name = document.getElementById('name').value;
    const studentId = document.getElementById('studentId').value;
    const jobField = document.getElementById('jobField').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const jobOrganization = document.getElementById('jobOrganization').value;
    const jobBrunch = document.getElementById('jobBrunch').value;
    const email = document.getElementById('email').value;
    const contactNo = document.getElementById('contactNo').value;
    const linkedin = document.getElementById('linkedin').value;
    const availableTimeToContact = document.getElementById('availableTimeToContact').value;
    const password = document.getElementById('password').value;
    if(name===null || studentId===null || email===null||password===null)
    {
      setFormError("Please Fill up all the (*) marked fields!!");
      return;
    }
    axios({
        method:"POST",
        url:`http://localhost:8080/register?name=${name}&studentId=${studentId}&jobField=${jobField}&jobTitle=${jobTitle}&jobOrganization=${jobOrganization}&jobBrunch=${jobBrunch}&email=${email}&contactNo=${contactNo}&linkedin=${linkedin}&availableTimeToContact=${availableTimeToContact}&password=${password}`
    }).then(res => {
        const result = res.data;
        if(result.ResponseCode==='1')
        {
          setEmail(email);
          handleJustifyClick('tab4');
          return;
        }
        setSnakText(result.ResponseData);
        setSnakOpen(true);
      });
  };

  const recoverPassword = () => {
    const studentId = document.getElementById('studentIdRecover').value;
    axios({
      method:"POST",
      url:`http://localhost:8080/forgotPassword?studentId=${studentId}`
    }).then(res => {
      const result = res.data;
      if(result.ResponseCode==='1')
        {
          setTab5Message(result.ResponseData); 
          handleJustifyClick('tab5');
          return;
        }
      else
      {
        setSnakText(result.ResponseData);
        setSnakOpen(true);
      }
      
    });
  };

  const confirmEmail = () => {
    const confirmationCode = document.getElementById('confirmationCode').value;
    axios({
      method:"POST",
      url:`http://localhost:8080/verifyEmail?varificationCode=${confirmationCode}`
  }).then(res => {
      const result = res.data;
      if(result.ResponseCode==='1')
        {
          setTab5Message(result.ResponseData); 
          handleJustifyClick('tab5');
          return;
        }
      else
      {
        setSnakText(result.ResponseData);
        setSnakOpen(true);
      }
    });
  };


  const snakClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnakOpen(false);
  };

  const checkPassword = () => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if(password!==confirmPassword)
    {
      setPasswordError("Password and Confirm Passwrod must be same");
    }
    else
    {
      setPasswordError("");
    }
  };

  

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>
          <div className="text-center mb-3">
            <p style={{color:"#0d6efd", fontSize: 30, fontWeight: 'bold' }} className="text-center mt-3">Log in to land your own ground</p>
          </div>
          <hr style={{color:"#0d6efd"}} class="hr" />

          <MDBInput wrapperClass='mb-4' label='Student Id' id='loginId' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='loginPassword' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />

            <MDBTabsLink onClick={() => handleJustifyClick('tab3')}>
            <p style={{color:"#0d6efd" , cursor:"pointer" ,textDecoration: 'underline' }}>Forgot password?</p>
          </MDBTabsLink>
            
          </div>

          <MDBBtn className="mb-4 w-100" onClick={login}>Sign in</MDBBtn>
          <p className="text-center">Not a member? 
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} >
          <p style={{color:"#0d6efd" , cursor:"pointer" ,textDecoration: 'underline' }}>Register</p>
          </MDBTabsLink></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p style={{color:"#0d6efd", fontSize: 30, fontWeight: 'bold' }} className="text-center mt-3">Register to help for growing your own ground</p>
          </div>
          <hr style={{color:"#0d6efd"}} class="hr" />
          <p style={{color:'red'}}>{formError}</p>
          <MDBInput wrapperClass='mb-4' label='Name*' id='name' type='text'/>
          <MDBInput wrapperClass='mb-4' label='RUET Student Id*' id='studentId' type='number'/>
          
          <MDBInput wrapperClass='mb-4' label='JOB Field' id='jobField' type='text'/>
          <MDBInput wrapperClass='mb-4' label='JOB Title' id='jobTitle' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Current Organization' id='jobOrganization' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Current Brunch' id='jobBrunch' type='text'/>

          <MDBInput wrapperClass='mb-4' label='Email*' id='email' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Contact No*' id='contactNo' type='phone'/>
          <MDBInput wrapperClass='mb-4' label='Linkedin' id='linkedin' type='link'/>
          <MDBInput wrapperClass='mb-4' label='Avaiable time to contact*' id='availableTimeToContact' type='link'/>
          <MDBInput wrapperClass='mb-4' label='Password*' id='password' type='password'/>
          <p style={{color:'red'}}>{passwordError}</p>
          <MDBInput wrapperClass='mb-4' onChange={checkPassword} label='Confirm Password*' id='confirmPassword' type='password'/>
         

          <MDBBtn className="mb-4 w-100" onClick={register}>Sign up</MDBBtn>

          <p className="text-center">Already have a account? 
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} >
          <p style={{color:"#0d6efd" , cursor:"pointer" ,textDecoration: 'underline' }}>Login</p>
          </MDBTabsLink></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab3'}>
        <div className="text-center mb-3">
            <p style={{color:"#0d6efd", fontSize: 30, fontWeight: 'bold' }} className="text-center mt-3">Reset Password</p>
          </div>
          <hr style={{color:"#0d6efd"}} class="hr" />
          <div className="text-center mb-3">
            <p style={{color:"#a10303"}} className="text-center mt-3">Provide your 'RUET Student Id' if you have an account</p>
          </div>
          <MDBInput wrapperClass='mb-4' label='Student Id' id='studentIdRecover' type='id'/>

          <MDBBtn className="mb-4 w-100" onClick={recoverPassword}>Confirm</MDBBtn>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab4'}>
        <div className="text-center mb-3">
            <p style={{color:"#0d6efd", fontSize: 30, fontWeight: 'bold' }} className="text-center mt-3">Email Confirmation</p>
          </div>
          <hr style={{color:"#0d6efd"}} class="hr" />
          <div className="text-center mb-3">
            <p style={{color:"#a10303"}} className="text-center mt-3">Provide the confirmation code was sent at {email}</p>
          </div>
          <MDBInput wrapperClass='mb-4' label='Varification Code' id='confirmationCode' type='id'/>

          <MDBBtn className="mb-4 w-100" onClick={confirmEmail}>Confirm</MDBBtn>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab5'}>
          <div className="text-center mb-3">
            <p style={{color:"#0d6efd", fontSize: 30, fontWeight: 'bold' }} className="text-center mt-3" id='tab5Message'>{tab5message}</p>
          </div>
          <hr style={{color:"#0d6efd"}} class="hr" />
          <div className="text-center mb-3">
            <p style={{color:"#a10303"}} className="text-center mt-3" >Now Login using your Student Id and Password!!</p>
            
            <MDBBtn className="mb-4 w-100" onClick={() => handleJustifyClick('tab1')}>Login</MDBBtn>
          </div>
          
        </MDBTabsPane>

      </MDBTabsContent>
      <Snackbar
        open={snakOpen}
        autoHideDuration={2000}
        onClose={snakClose}
        message={snakText}
      /> 
    </MDBContainer>
  );
}

export default SignIn;