import { useState, useEffect } from 'react'
import Nav from '../Components/Nav.js';
import {Grid} from '@mui/material';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; //npm install -S react-router-dom

import React from 'react';
import {Link} from 'react-router-dom';


import "./signUp.css";
import apiService from '../Components/apiService.js'


function SignUp() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "Please Enter Username",
    pass: "Please Enter Password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    //const userData = database.find((user) => user.username === uname.value);


    // Compare user info
    if (uname.value === "") {
        setErrorMessages({ name: "uname", message: errors.uname });
    } else if (pass.value === "") {
        setErrorMessages({ name: "pass", message: errors.pass });
    } else {
        setIsSubmitted(true); 
        apiService.InsertUser(uname.value, pass.value);
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
        <div className="title">Sign Up</div>
        {isSubmitted ? 
        <div>User has successfully signed up!
        <p>Sign in:</p>
            <Link to="/">SignIn</Link>
        </div> : renderForm}
      </div>
    </div>
  );
}

export default SignUp;
