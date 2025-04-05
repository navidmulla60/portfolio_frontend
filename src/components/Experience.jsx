import React from 'react';
import { Box, Typography, Paper, Divider, Chip } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience = ({ experiences }) => (
  <Box id="experience" sx={{ py: 4, px: 2 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Professional Experience
    </Typography>
    <Timeline position="alternate">
      {experiences.map((exp, index) => (
        <TimelineItem key={exp.id}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index !== experiences.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6">{exp.company}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {exp.position} | {exp.duration}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" paragraph>
                {exp.description}
              </Typography>
              {exp.responsibilities.split('\n').map((item, i) => (
                <Chip 
                  key={i} 
                  label={item} 
                  size="small" 
                  sx={{ m: 0.5 }} 
                  color={item.includes('ROS') ? 'primary' : 'default'}
                />
              ))}
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Box>
);

export default Experience;