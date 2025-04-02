import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Hero = ({ title, subtitle, description, resumeUrl }) => (
  <Box sx={{ 
    textAlign: 'center', 
    py: 8,
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
  }}>
    <Typography variant="h2" gutterBottom>
      {title}
    </Typography>
    <Typography variant="h5" color="primary" gutterBottom>
      {subtitle}
    </Typography>
    <Typography variant="body1" paragraph>
      {description}
    </Typography>
    
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
      <Button 
        variant="contained" 
        href="#projects"
        sx={{ mt: 3 }}
      >
        View My Projects
      </Button>
      
      {resumeUrl && (
        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
          href={resumeUrl}
          download
          sx={{ mt: 3 }}
        >
          Download Resume
        </Button>
      )}
    </Box>
  </Box>
);

export default Hero;