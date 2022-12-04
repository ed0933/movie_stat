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
  const database = [
    {
      username: "u1",
      password: "p1"
    },
    {
      username: "u2",
      password: "p2"
    }
  ];

  const errors = {
    uname: "INVALID USERNAME",
    pass: "INVALID PASSWORD"
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    apiService.CheckLogin(uname.value, pass.value).then((response) => setUserResult(response['username'][0]))
    .catch(error => console.log('error', error));
    apiService.CheckLogin(uname.value, pass.value).then((response) => setPassResult(response['password'][0]))
    .catch(error => console.log('error', error));
    console.log(userResult);
    console.log(passResult);

    // Compare user info
    if (uname.value == userResult) {
      if (pass.value !== passResult) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        routeChange()   }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

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
