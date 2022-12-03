import '../App.css';
import Nav from '../Components/Nav.js';       

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


function Home() {

  return (
    <div className='App'>
      <Nav />
      <Paper style={styles.paperContainer}>
        <Grid container spacing={0} position= 'fixed' direction='column' alignItems='center' justifyContent='center' style={{ minHeight: '100%', backdropFilter: 'blur(10px)',  fontFamily: 'Trebuchet MS', fontSize: '4vh', color: 'white', textShadow: "2px 2px #ffffff", opacity:"0.95"}}>
        <h1>MovieStat</h1>
        <br/>
         A Movie Statistic Site for Everyone
        </Grid>
      </Paper>

    </div>
  );
}

export default Home;