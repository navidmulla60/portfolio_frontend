import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Menu, 
  MenuItem, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleScroll = (to) => {
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70,
    });
    setAnchorEl(null); // Close menu after selection
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: 'Home', type: 'router', to: '/' },
    { 
      name: 'Projects',
      type: 'scroll',
      to: '/#projects',
      onClick: () => handleScroll('projects')
    },
    { 
      name: 'Experience',
      type: 'scroll',
      to: '/#experience',
      onClick: () => handleScroll('experience')
    },
    { 
      name: 'Skills',
      type: 'scroll',
      to: '/#skills',
      onClick: () => handleScroll('skills')
    },
    { 
      name: 'Publications',
      type: 'scroll',
      to: '/#publications',
      onClick: () => handleScroll('publications')
    },
    { 
      name: 'Contact',
      type: 'scroll',
      to: '/#contact',
      onClick: () => handleScroll('contact')
    }
  ];

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ 
                color: '#1a237e',
                position: 'absolute',
                left: theme.spacing(2)
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  width: 200,
                  maxHeight: '70vh'
                }
              }}
            >
              {navItems.map((item) => (
                <MenuItem 
                  key={item.name}
                  component={Link}
                  to={item.to}
                  onClick={item.onClick}
                  sx={{
                    color: '#1a237e',
                    '&:hover': {
                      backgroundColor: 'rgba(26, 35, 126, 0.1)'
                    }
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex' }}>
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;