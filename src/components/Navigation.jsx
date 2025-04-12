import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Navigation = () => {
  const handleScroll = (to) => {
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70, // Adjust for your header height
    });
  };

  const navItems = [
    { name: 'Home', type: 'router', to: '/' },
    { 
      name: 'Projects',
      type: 'router',
      to: '/#projects',
      onClick: () => handleScroll('projects')
    },
    { 
      name: 'Experience',
      type: 'router',
      to: '/#experience',
      onClick: () => handleScroll('experience')
    },
    { 
      name: 'Skills',
      type: 'router',
      to: '/#skills',
      onClick: () => handleScroll('skills')
    },
    { 
      name: 'Publications',
      type: 'router',
      to: '/#publications',
      onClick: () => handleScroll('publications')
    },
    { 
      name: 'Contact',
      type: 'router',
      to: '/#contact',
      onClick: () => handleScroll('contact')
    }
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
        <Button 
          key={item.name}
          component={Link}
          to={item.to}
          onClick={item.onClick}
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
      ))}
    </Box>
  );
};

export default Navigation;