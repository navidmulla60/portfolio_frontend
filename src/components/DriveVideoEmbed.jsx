import React, { useState } from 'react';
import { Box, Typography, Divider, CircularProgress, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const DriveVideoEmbed = ({ url, title }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Box sx={{ mt: 2 }}>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      )}

      <Box
        component="iframe"
        src={url} // Use the URL directly
        title={`${title} Demonstration`}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
        sx={{
          display: loading ? 'none' : 'block',
          width: '100%',
          height: { xs: '250px', md: '400px' },
          border: 'none',
          borderRadius: '8px',
          boxShadow: 3
        }}
        allow="autoplay; fullscreen"
        allowFullScreen
      />

      {error && (
        <Button 
          variant="contained" 
          href={url.replace('/preview', '/view')} // Fallback to view mode
          target="_blank"
          startIcon={<PlayArrowIcon />}
          sx={{ mt: 2 }}
        >
          Open Video in New Tab
        </Button>
      )}
    </Box>
  );
};
export default DriveVideoEmbed;