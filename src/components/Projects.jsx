import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Projects = ({ projects }) => (
  <section id="projects" style={{ 
    padding: '2rem 0',
    textAlign: 'center' // Added center alignment for section
  }}>
    <Typography variant="h4" gutterBottom sx={{ 
      mb: 4,
      fontWeight: 'bold',
      color: 'primary.main'
    }}>
      Robotics Projects
    </Typography>
    
    <Grid 
      container 
      spacing={4}
      sx={{
        justifyContent: 'center', // Center grid items
        maxWidth: '1200px', // Constrain max width
        margin: '0 auto', // Center the grid container
        padding: '0 24px' // Add horizontal padding
      }}
    >
      {projects.map(project => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4} 
          key={project.id}
          sx={{
            display: 'flex', // Make grid items flex containers
            justifyContent: 'center', // Center cards horizontally
          }}
        >
          <Card sx={{ 
            width: '100%',
            maxWidth: '400px', // Constrain card width
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: 3
            }, backgroundColor: 'rgba(255, 255, 255, 0.55)', // 👈 semi-transparent white
            backdropFilter: 'blur(4px)', // optional: soft blur effect behind it
            borderRadius: 3
          }}>
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title}
                style={{ 
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover' 
                }}
              />
            )}
            <CardContent sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Center content vertically
              textAlign: 'center' // Center text
            }}>
              <Typography variant="h5" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" paragraph>
                {project.description.substring(0, 150)}...
              </Typography>
              <div style={{ 
                marginBottom: '1rem',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center', // Center tech tags
                gap: '4px'
              }}>
                {project.technologies.split(',').map(tech => (
                  <span 
                    key={tech} 
                    style={{
                      display: 'inline-block',
                      background: '#e0e0e0',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      fontSize: '0.75rem'
                    }}
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
              <Button 
                component={Link}
                to={`/projects/${project.id}`}
                variant="outlined"
                size="small"
                sx={{
                  alignSelf: 'center' // Ensure button centering
                }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </section>
);

export default Projects;