import 'devextreme/dist/css/dx.common.css';
import { useState } from 'react'
import 'devextreme/dist/css/dx.light.css'; //npx -p devextreme-cli devextreme add devextreme-react
import './actor.css';

import {Paper, Grid} from '@mui/material'; //npm install @mui/material @emotion/react @emotion/styled
import Image from '../Assets/img2.jpg';

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      height: '2000px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  }
};

function ActorLookup() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const errors = {
    uname: "Please Enter Actor",
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname } = document.forms[0];
    if (uname.value === "") {
      setErrorMessages({ name: "uname", message: errors.uname });
  } else {
      setIsSubmitted(true); 
  }
};

const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Enter actor name</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  
  return (
    <div className="actor">
    <div className="actor-form">
      <Paper style={styles.paperContainer}>
      <Grid container spacing={0} position= 'fixed' direction='column' alignItems='center' justifyContent='top' style={{ minHeight: '100%', backdropFilter: 'blur(10px)',  fontFamily: 'Trebuchet MS', fontSize: '4vh', color: 'white', textShadow: "2px 2px #6e6666", opacity:"0.90"}}>
      <h1>Search an actor</h1>
      {isSubmitted ? <div>Actor Looked Up!!</div> : renderForm}
      </Grid>
    </Paper>
    </div>
  </div>
);

}

export default ActorLookup;

