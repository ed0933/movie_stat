import 'devextreme/dist/css/dx.common.css';
import { useState, useEffect } from 'react'
import 'devextreme/dist/css/dx.light.css'; //npx -p devextreme-cli devextreme add devextreme-react
import './actor.css';
import apiService from '../Components/apiService.js'


import {Paper, Grid, Box} from '@mui/material'; //npm install @mui/material @emotion/react @emotion/styled
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
  const [formJSON, setFormJSON] = useState({"stage" : {"0": "None"}, "dow" : {"0": "None"}, "stage" : {"0": "None"}, "birth" : {"0": "None"}, "gov" : {"0": "None"}, "giv" : {"0": "None"}, "gen" : {"0": "None"}, "dob" : {"0": "None"}})
  const [formResult, setFormResult] = useState('');

  useEffect(() => {
    setFormResult("Stage Name: [" + JSON.stringify(formJSON["stage"][0]) + "], " + "Work Time: [" + JSON.stringify(formJSON["dow"][0]) + "], " + "Birth Name: [" + JSON.stringify(formJSON["birth"][0]) + ", " + JSON.stringify(formJSON["gov"][0]) + "], " + "Gender: [" + JSON.stringify(formJSON["giv"][0]) + "], " + "Lived: [" + JSON.stringify(formJSON["gen"][0]) + "-" + JSON.stringify(formJSON["dob"][0]) +  "]");
  }, [formJSON]);

  const errors = {
    stage: "Please Enter Actor",
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { stage } = document.forms[0];
    if (stage.value === "") {
      setErrorMessages({ name: "stage", message: errors.stage });
  } 
  apiService.GetActorInfo(stage.value).then((response) => setFormJSON(response))
    .catch(error => console.log('error', error));
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
          <input type="text" name="stage" required />
          {renderErrorMessage("stage")}
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

      <Grid container spacing={2} position= 'fixed' direction='row' alignItems='center' marginLeft= '3vh' marginTop = '300px' justifyContent='flex-start'>            
        <Grid item>
                <ArrowForwardIosIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
        </Grid>
        <Grid item> 
            <Box component="div" sx={{ display: 'inline', 
                    px: 20,
                    py: 1, 
                    m: 0.1, 
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) => theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    borderRadius: 2,
                    fontSize: '1rem',
                    fontWeight: '700',
                }}>
                {formResult}
            </Box>
          </Grid>
      </Grid>
    </Paper>
    </div>
  </div>
);

}

export default ActorLookup;

