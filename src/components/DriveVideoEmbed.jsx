// import React, { useState } from 'react';
// import { Box, Typography, Divider, CircularProgress, Button } from '@mui/material';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// const DriveVideoEmbed = ({ url, title }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   return (
//     <Box sx={{ mt: 2 }}>
//       {loading && (
//         <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
//           <CircularProgress />
//         </Box>
//       )}

//       <Box
//         component="iframe"
//         src={url} // Use the URL directly
//         title={`${title} Demonstration`}
//         onLoad={() => setLoading(false)}
//         onError={() => setError(true)}
//         sx={{
//           display: loading ? 'none' : 'block',
//           width: '100%',
//           height: { xs: '250px', md: '400px' },
//           border: 'none',
//           borderRadius: '8px',
//           boxShadow: 3
//         }}
//         allow="autoplay; fullscreen"
//         allowFullScreen
//       />

//       {error && (
//         <Button 
//           variant="contained" 
//           href={url.replace('/preview', '/view')} // Fallback to view mode
//           target="_blank"
//           startIcon={<PlayArrowIcon />}
//           sx={{ mt: 2 }}
//         >
//           Open Video in New Tab
//         </Button>
//       )}
//     </Box>
//   );
// };
// export default DriveVideoEmbed;

import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, Button, CircularProgress } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const DriveVideoEmbed = ({ url, title }) => {
  const [embedUrl, setEmbedUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const extractFileId = (url) => {
      const patterns = [
        /\/file\/d\/([^\/]+)/,         // Standard URL pattern
        /id=([^&]+)/,                   // URL parameter format
        /drive\.google\.com\/open\?id=([^&]+)/  // Alternative format
      ];
      
      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) return match[1];
      }
      return null;
    };

    const fileId = extractFileId(url);
    if (fileId) {
      setEmbedUrl(`https://drive.google.com/file/d/${fileId}/preview`);
    } else {
      setError('Invalid Google Drive URL');
    }
  }, [url]);

  const handleLoad = () => {
    // Check if the iframe content loaded successfully
    setTimeout(() => {
      const iframe = document.querySelector('iframe');
      if (iframe && iframe.contentDocument?.title === 'Error 404 (Not Found)') {
        setError('Video not found or access denied');
      } else {
        setLoading(false);
      }
    }, 2000);
  };

  if (error) {
    return (
      <Box sx={{ p: 2, border: '1px dashed #f44336', borderRadius: 1, textAlign: 'center' }}>
        <Typography color="error" paragraph>
          {error.includes('Invalid') ? error : 'Could not load video (403 Error)'}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={url}
          target="_blank"
          startIcon={<PlayArrowIcon />}
          sx={{ mt: 1 }}
        >
          Open Video Directly
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Make sure sharing settings are set to "Anyone with the link"
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      )}
      <Box
        component="iframe"
        src={embedUrl}
        title={`${title} Demonstration`}
        onLoad={handleLoad}
        onError={() => setError('Failed to load video')}
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
    </Box>
  );
};


export default DriveVideoEmbed;
