import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    py: 1,
    borderBottom: '1px solid #e0e0e0'
  }}>
    <Button component={Link} to="/" sx={{ mx: 1 }}>
      Home
    </Button>
    <Button href="projects" sx={{ mx: 1 }}>
      Projects
    </Button>
    <Button href="experience" sx={{ mx: 1 }}>
      Experience
    </Button>
    <Button href="skills" sx={{ mx: 1 }}>
      Skills
    </Button>
    <Button href="publications" sx={{ mx: 1 }}>
      Publications
    </Button>
    <Button href="contact" sx={{ mx: 1 }}>
      Contact
    </Button>
  </Box>
);

export default Navigation;