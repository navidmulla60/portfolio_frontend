import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProject } from '../api';
import { 
  Typography, Box, Chip, Stack, Divider, Button, 
  List, ListItem, ListItemText 
} from '@mui/material';
import DriveVideoEmbed from '../components/DriveVideoEmbed';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProject(id).then(res => setProject(res.data));
  }, [id]);

  if (!project) return <Typography>Loading...</Typography>;

  // Special formatting for ROS projects
  const isRosProject = project.technologies.toLowerCase().includes('ros');

  return (
    <Box sx={{ p: 4, maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h3" gutterBottom>
        {project.title}
      </Typography>
      
      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        {project.technologies.split(',').map(tech => (
          <Chip 
            label={tech.trim()} 
            key={tech} 
            color={tech.toLowerCase().includes('ros') ? 'primary' : 'default'}
          />
        ))}
      </Stack>
      
      {project.image && (
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '500px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          />
        </Box>
      )}
      
      <Typography variant="h5" gutterBottom>Project Overview</Typography>
      <Divider sx={{ mb: 3 }} />
      
      {isRosProject ? (
        <>
          <Typography variant="body1" paragraph>
            {project.description.split('●')[0]}
          </Typography>
          <List dense>
            {project.description.split('●').slice(1).map((point, i) => (
              <ListItem key={i}>
                <ListItemText primary={point.trim()} />
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <Typography variant="body1" paragraph>
          {project.description}
        </Typography>
      )}
      
      {/* Special ROS components section */}
      {isRosProject && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>ROS Components</Typography>
          <Divider sx={{ mb: 3 }} />
          <Stack spacing={2}>
            {project.title.includes('Navigation') && (
              <div>
                <Typography variant="h6">Navigation Stack</Typography>
                <Typography variant="body2">
                  Implemented SLAM and AMCL for autonomous navigation in dynamic environments.
                </Typography>
              </div>
            )}
            {project.title.includes('MoveIt') && (
              <div>
                <Typography variant="h6">MoveIt Integration</Typography>
                <Typography variant="body2">
                  Configured motion planning pipelines for collision-free trajectory execution.
                </Typography>
              </div>
            )}
          </Stack>
        </Box>
      )}
      
      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        {project.github_link && (
          <Button 
            variant="contained" 
            href={project.github_link}
            target="_blank"
            startIcon={<i className="fab fa-github"></i>}
          >
            Source Code
          </Button>
        )}
        {project.live_link && (
          <Button 
            variant="outlined" 
            href={project.live_link}
            target="_blank"
            startIcon={<i className="fas fa-external-link-alt"></i>}
          >
            Live Demo
          </Button>
        )}
      </Box>
      
    {(project.title.includes('Robot') || project.title.includes('ROS')) && (
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>Project Demonstration</Typography>
        <Divider sx={{ mb: 3 }} />
        <DriveVideoEmbed 
          url={project.live_link}
          // url="https://drive.google.com/file/d/1-zfKNZH-aluNdyeZipnbpeHyiWU3Mx4K/preview?usp=drive_link" 
          title={project.title}
        />
      </Box>
    )}
    </Box>
  );
};

export default ProjectDetail;