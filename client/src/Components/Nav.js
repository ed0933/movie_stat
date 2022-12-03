import * as React from 'react';
import {AppBar, Box, Container, Button, Toolbar, Typography} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const pages = ['actorLookup', 'movieLookup'];

const Nav = () => {


  return (
    <AppBar position="fixed"  style={{ background: '#5471a8', opacity:0.9}}>
      <Container maxWidth="x0">
        <Toolbar>
          <AcUnitIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

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

         
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href= {"/" + page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
