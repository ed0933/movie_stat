import { useState, useEffect } from 'react'
import Nav from '../Components/Nav.js';
import {Grid} from '@mui/material';
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import apiService from '../Components/apiService.js'

import "./signIn.css";

function SignIn() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userResult, setUserResult] = useState({});
  const [passResult, setPassResult] = useState({});


  // User Login info, this needs to be editable and have 

  const errors = {
    pass: "INVALID USERNAME OR PASSWORD"
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  
  useEffect(() => {
    var { uname, pass } = document.forms[0];
    validationCheck(uname,pass);
  }, [userResult, passResult]);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    apiService.CheckLogin(uname.value, pass.value).then((response) => setUserResult(response['username'][0]))
    .catch(error => console.log('error', error));
    apiService.CheckLogin(uname.value, pass.value).then((response) => setPassResult(response['password'][0]))
    .catch(error => console.log('error', error));

    // Compare user info
    
  };

  function validationCheck(uname, pass) {
    if (uname.value === userResult) {
      if (pass.value !== passResult) {
        // Invalid password
        if (pass.value !== '') {
          setErrorMessages({ name: "pass", message: errors.pass });
        }
      } else {
        setIsSubmitted(true);
        routeChange()   
      }
    } else {
      // Username not found
      if (uname.value !== '') {
        setErrorMessages({ name: "pass", message: errors.pass });
      }
    }
  }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in!</div> : renderForm}
      </div>
    </div>
  );
}

export default SignIn;
