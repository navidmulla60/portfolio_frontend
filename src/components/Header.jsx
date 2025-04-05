import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ 
      backgroundColor: '#1a237e',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    }}>
      <Toolbar>
        {/* Mobile menu button (optional) */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo/Title */}
        <Typography 
          variant="h6" 
          component={Link} 
          to="/"
          sx={{ 
            flexGrow: 1,
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          Navid Mulla
        </Typography>

        {/* Navigation links (desktop) */}
        {/* <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <IconButton 
            component={Link} 
            to="/" 
            color="inherit"
            sx={{ mx: 1 }}
          >
            Home
          </IconButton>
          <IconButton 
            component="a" 
            href="#projects" 
            color="inherit"
            sx={{ mx: 1 }}
          >
            Projects
          </IconButton>
          <IconButton 
            component="a" 
            href="#experience" 
            color="inherit"
            sx={{ mx: 1 }}
          >
            Experience
          </IconButton>
          <IconButton 
            component="a" 
            href="#contact" 
            color="inherit"
            sx={{ mx: 1 }}
          >
            Contact
          </IconButton>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header; // This export is crucial