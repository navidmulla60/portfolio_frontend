import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
  const navItems = [
    { name: 'Home', type: 'router', to: '/' },
    { name: 'Projects', type: 'scroll', to: 'projects' },
    { name: 'Experience', type: 'scroll', to: 'experience' },
    { name: 'Skills', type: 'scroll', to: 'skills' },
    { name: 'Publications', type: 'scroll', to: 'publications' },
    { name: 'Contact', type: 'scroll', to: 'contact' }
  ];

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      py: 1,
      borderBottom: '1px solid #e0e0e0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {navItems.map((item) => (
        item.type === 'router' ? (
          <Button 
            key={item.name}
            component={Link}
            to={item.to}
            sx={{ 
              mx: 1,
              color: '#1a237e',
              '&:hover': {
                backgroundColor: 'rgba(26, 35, 126, 0.1)'
              }
            }}
          >
            {item.name}
          </Button>
        ) : (
          <Button 
            key={item.name}
            component={ScrollLink}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-70} // Adjust for fixed header height
            spy={true}
            passive={true}
            activeClass="active"
            sx={{ 
              mx: 1,
              color: '#1a237e',
              '&:hover': {
                backgroundColor: 'rgba(26, 35, 126, 0.1)'
              },
              '&.active': {
                borderBottom: '2px solid #1a237e'
              }
            }}
          >
            {item.name}
          </Button>
        )
      ))}
    </Box>
  );
};

export default Navigation;