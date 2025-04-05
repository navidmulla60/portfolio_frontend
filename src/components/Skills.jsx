import React from 'react';
import { Box, Typography, Grid, LinearProgress } from '@mui/material';

const Skills = ({ skills }) => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <Box id="skills" sx={{ py: 4, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Technical Skills
      </Typography>
      <Grid container spacing={4} sx={{ 
        mt: 2,
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        {categories.map((category) => (
          <Grid item xs={12} md={6} key={category} sx={{ maxWidth: '600px' }}>
            <Box sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'background.paper'
            }}>
              <Typography variant="h6" gutterBottom sx={{ 
                color: '#1a237e',
                fontWeight: 'bold',
                mb: 3
              }}>
                {category}
              </Typography>
              
              {skills
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <Box key={skill.id} sx={{ 
                    mb: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <Typography variant="body2" sx={{ 
                      mb: 1,
                      fontWeight: 500
                    }}>
                      {skill.name}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={skill.proficiency}
                      sx={{
                        width: '80%',
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: '#e0e0e0',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 5,
                          backgroundColor: '#1a237e'
                        }
                      }}
                    />
                    <Typography variant="caption" sx={{ 
                      mt: 1,
                      color: 'text.secondary'
                    }}>
                      {skill.proficiency}%
                    </Typography>
                  </Box>
                ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;