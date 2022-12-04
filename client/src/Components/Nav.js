import * as React from 'react';
import {AppBar, Box, Container, Button, Toolbar, Typography} from '@mui/material';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

const signIn = [{title: 'Sign-Up', keys:'SignUp'}, {title: 'Sign-In', keys:'SignIn'}];
const pages = [{title: 'Actor Lookup', keys:'Actor'}, {title: 'Movie Lookup', keys:'href'}];


const Nav = () => {


  return (
    <AppBar position="fixed"  style={{ background: '#bf3232', opacity:0.9}}>
      <Container maxWidth="x0">
        <Toolbar>
          <MovieFilterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          &nbsp;/ Movie Stat /
          </Typography>

         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            {pages.map((page) => (
              <Button
                key={signIn.keys}
                href= {"/" + page.keys}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'right' } }}>
            {signIn.map((page) => (
              <Button
                key={signIn.keys}
                href= {"/" + page.keys}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
