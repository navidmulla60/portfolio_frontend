import React from 'react';
import { Typography, Box, Avatar, Paper } from '@mui/material';

const About = ({ summary, education }) => (
  <Box id="about" sx={{ py: 4, px: 2 }}>
    <Paper elevation={3} sx={{ p: 4, maxWidth: '800px', mx: 'auto' }}>
      <Typography variant="h4" gutterBottom align="center">
        About Me
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Avatar
          src="/path/to/your/photo.jpg" // Replace with your photo
          sx={{ 
            width: 200, 
            height: 200,
            mx: 'auto',
            border: '4px solid #1a237e'
          }}
        />
        <Box>
          <Typography variant="body1" paragraph>
            {summary || `Senior Robotics Engineer with 4+ years specializing in ROS/ROS2, autonomous navigation, and computer vision.`}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Education:
          </Typography>
          <Typography variant="body1" paragraph>
            {education || `M.Tech in Robotic Engineering - Ramaiah University (2018-2020)`}
          </Typography>
          <Typography variant="body1">
            B.E in Mechanical Engineering - Visvesvaraya Technological University (2012-2016)
          </Typography>
        </Box>
      </Box>
    </Paper>
  </Box>
);

export default About;