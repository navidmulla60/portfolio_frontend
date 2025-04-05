import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

const Publications = ({ publications }) => (
  <Box id="publications" sx={{ py: 4, px: 2 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Publications
    </Typography>
    <List sx={{ maxWidth: '800px', mx: 'auto' }}>
      {publications.map((pub) => (
        <ListItem key={pub.id} sx={{ py: 2 }}>
          <ArticleIcon color="primary" sx={{ mr: 2 }} />
          <ListItemText
            primary={
              <Link href={pub.link} target="_blank" underline="hover">
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