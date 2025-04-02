import React from 'react';

const YouTubeEmbed = ({ url, title }) => (
  <div style={{
    position: 'relative',
    paddingBottom: '56.25%', /* 16:9 */
    height: 0,
    overflow: 'hidden',
    margin: '2rem 0'
  }}>
    <iframe
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none'
      }}
      src={`https://www.youtube.com/embed/${extractVideoId(url)}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

// Helper to extract YouTube ID from URL
function extractVideoId(url) {
  // Implement your URL parsing logic here
  return 'DEMO_ID'; // Replace with actual parsing
}

export default YouTubeEmbed;