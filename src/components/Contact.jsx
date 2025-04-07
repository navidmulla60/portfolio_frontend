import React from 'react';
import { Box, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => (
  <Box id="contact" sx={{ py: 4, px: 2, backgroundColor: '#f5f5f5' }}>
    <Typography variant="h4" align="center" gutterBottom>
      Get In Touch
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Message" multiline rows={4} variant="outlined" fullWidth />
          <Button variant="contained" size="large" sx={{ alignSelf: 'center' }}>
            Send Message
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Email sx={{ mr: 2 }} />
            <Typography>navidmulla60@gmail.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Phone sx={{ mr: 2 }} />
            <Typography>+91 8660744720</Typography>
          </Box>
          <Box>
            <IconButton href="https://www.linkedin.com/in/navid-mulla/" target="_blank">
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton href="https://github.com/navidmulla60?tab=repositories" target="_blank">
              <GitHub fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Contact;