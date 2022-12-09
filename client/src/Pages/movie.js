import 'devextreme/dist/css/dx.common.css';
import { useState, useEffect } from 'react'
import 'devextreme/dist/css/dx.light.css'; //npx -p devextreme-cli devextreme add devextreme-react
import './actor.css';
import apiService from '../Components/apiService.js'
import Nav from '../Components/Nav.js';


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

function MovieLookup() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formJSON, setFormJSON] = useState({"title" : {"0": "None"}, "genres" : {"0": "None"}, "runtime" : {"0": "None"}, "release_date" : {"0": "None"}})
  const [formResult, setFormResult] = useState('');

  useEffect(() => {
    setFormResult("Title: [" + JSON.stringify(formJSON["title"][0]) + "], " + "Genre: [" + JSON.stringify(formJSON["genres"][0]) + "], Runtime: [" + JSON.stringify(formJSON["runtime"][0]) + "], " + "Release Date: [" + JSON.stringify(formJSON["release_date"][0]) + "]");
  }, [formJSON]);

  const errors = {
    stage: "Please Enter Movie",
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { stage } = document.forms[0];
    if (stage.value === "") {
      setErrorMessages({ name: "stage", message: errors.stage });
  } 
  apiService.GetMovieInfo(stage.value).then((response) => setFormJSON(response))
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
          <label>Enter movie name</label>
          <input type="text" name="stage" required />
          {renderErrorMessage("stage")}
        </div>

      </form>
    </div>
  );
  
  return (
    <div className="movie">
    <Nav />
    <div className="movie-form">
      <Paper style={styles.paperContainer}>
      &nbps;
      &nbps;

      <Grid container spacing={0} position= 'fixed' direction='column' alignItems='center' justifyContent='top' style={{ minHeight: '100%', backdropFilter: 'blur(10px)',  fontFamily: 'Trebuchet MS', fontSize: '4vh', color: 'white', textShadow: "2px 2px #6e6666", opacity:"0.90"}}>
      <h1>Search an Movie</h1>
      {isSubmitted ? <div>Movie Looked Up!!</div> : renderForm}
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

export default MovieLookup;

