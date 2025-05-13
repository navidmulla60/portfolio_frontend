import React from "react";
import { Typography, Button, Box, useTheme, useMediaQuery } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { scroller } from 'react-scroll';

const Hero = ({ title, subtitle, description, resumeUrl }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Box
      sx={{
        textAlign: "center",
        py: isMobile ? 4 : 8,
        background: "linear-gradient(135deg, rgba(245,247,250,0.8) 0%, rgba(195,207,226,0.8) 100%)",
        backgroundImage: 'url("/images/heroic4.jpeg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <Typography 
        variant={isMobile ? "h3" : "h2"} 
        color="white" 
        gutterBottom
        sx={{
          fontSize: isMobile ? '2rem' : '3rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}
      >
        {title}
      </Typography>
      
      <Typography 
        variant={isMobile ? "h6" : "h5"} 
        color="primary" 
        gutterBottom
        sx={{
          fontWeight: 600
        }}
      >
        {subtitle}
      </Typography>
      
      <Typography 
        variant="body1" 
        color="white" 
        paragraph
        sx={{
          px: isMobile ? 2 : 4,
          fontSize: isMobile ? '0.9rem' : '1rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}
      >
        {description}
      </Typography>

      <Box sx={{ 
        display: "flex", 
        gap: 2, 
        justifyContent: "center",
        flexDirection: isMobile ? 'column' : 'row',
        px: isMobile ? 2 : 0
      }}>
      <Button 
          variant="contained" 
          onClick={() => {
            scroller.scrollTo('projects', {
              duration: 500,
              delay: 0,
              smooth: 'easeInOutQuart',
              offset: -70, // adjust for navbar height
            });
          }}
          sx={{ 
            mt: 3,
            py: isMobile ? 1 : 1.5,
            px: isMobile ? 2 : 3,
            fontSize: isMobile ? '0.8rem' : '0.9rem'
          }}
        >
       View My Projects
      </Button>

        {resumeUrl && (
          <Button
            variant="outlined"
            startIcon={<DownloadIcon fontSize={isMobile ? "small" : "medium"} />}
            href={resumeUrl}
            download
            sx={{ 
              mt: 3,
              py: isMobile ? 1 : 1.5,
              px: isMobile ? 2 : 3,
              fontSize: isMobile ? '0.8rem' : '0.9rem'
            }}
          >
            Download Resume
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Hero;