import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

const Publications = ({ publications }) => (
  <Box id="publications" sx={{ py: 4, px: 2 , backgroundColor: 'rgba(255, 255, 255, 0.25)', // 👈 semi-transparent white
    backdropFilter: 'blur(4px)', // optional: soft blur effect behind it
    borderRadius: 3}}>
    <Typography variant="h4" align="center" gutterBottom sx={{
        fontWeight: 800,
        textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
        letterSpacing: "0.05em",
      }}>
      Publications
    </Typography>
    <List sx={{ maxWidth: '800px', mx: 'auto' }}>
      {publications.map((pub) => (
        <ListItem key={pub.id} sx={{ py: 2 }}>
          <ArticleIcon color="primary" sx={{ mr: 2 }} />
          <ListItemText 
            primary={
              <Link href={pub.link} target="_blank" underline="hover" sx={{
                fontWeight: 1000,
                letterSpacing: "0.05em",
              }}>
                {pub.title}
              </Link>
            }
            secondary={`${pub.conference} | ${pub.year}`}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Publications;