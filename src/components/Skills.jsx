import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Skills = ({ skills }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const categories = [...new Set(skills.map(skill => skill.category))];

  // Constants for our calculations
  const SKILL_ITEM_HEIGHT = 44; // px - height of each skill item
  const SKILL_ITEM_MARGIN = 8; // px - vertical gap between items
  const CATEGORY_HEADER_HEIGHT = 56; // px - height of category header
  const MIN_CATEGORY_HEIGHT = 100; // px - minimum height for any category

  const renderSkillLevel = (proficiency) => {
    const stars = [];
    const fullStars = Math.floor(proficiency / 20);
    const hasHalfStar = proficiency % 20 >= 10;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} fontSize="small" sx={{ color: theme.palette.warning.main }} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalfIcon key={i} fontSize="small" sx={{ color: theme.palette.warning.main }} />);
      } else {
        stars.push(<StarBorderIcon key={i} fontSize="small" sx={{ color: theme.palette.text.disabled }} />);
      }
    }

    return (
      <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
        {stars}
      </Box>
    );
  };

  // Calculate required height for each category
  const calculateCategoryHeight = (skillCount) => {
    const itemsPerRow = 2; // We show 2 skills per row
    const rowCount = Math.ceil(skillCount / itemsPerRow);
    const contentHeight = (rowCount * SKILL_ITEM_HEIGHT) + ((rowCount - 1) * SKILL_ITEM_MARGIN);
    return Math.max(MIN_CATEGORY_HEIGHT, CATEGORY_HEADER_HEIGHT + contentHeight + 24); // 24px padding
  };

  return (
    <Box id="skills" sx={{ 
      py: 6,
      px: { xs: 2, md: 4 },
      backgroundColor: theme.palette.background.default,
    }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ 
        mb: 4,
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        position: 'relative',
        '&:after': {
          content: '""',
          display: 'block',
          width: '80px',
          height: '4px',
          backgroundColor: theme.palette.secondary.main,
          margin: '16px auto 0',
          borderRadius: '2px'
        }
      }}>
        Technical Expertise
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 3,
        maxWidth: '1200px',
        mx: 'auto',
        alignItems: 'start'
      }}>
        {categories.map((category) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          const categoryHeight = calculateCategoryHeight(categorySkills.length);
          
          return (
            <Box key={category} sx={{
              height: `${categoryHeight}px`,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Box sx={{
                p: 3,
                borderRadius: '12px',
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[1],
                border: `1px solid ${theme.palette.divider}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography variant="h6" sx={{ 
                  mb: 2,
                  fontWeight: 'bold',
                  color: theme.palette.primary.dark,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Box sx={{
                    width: '8px',
                    height: '24px',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '4px'
                  }} />
                  {category}
                </Typography>
                
                <Box sx={{
                  flex: 1,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.5,
                  alignContent: 'flex-start',
                  overflowY: 'auto',
                  pr: 1
                }}>
                  {categorySkills.map((skill) => (
                    <Box key={skill.id} sx={{
                      width: 'calc(50% - 12px)',
                      height: `${SKILL_ITEM_HEIGHT}px`,
                      p: 1.5,
                      borderRadius: '8px',
                      backgroundColor: theme.palette.action.hover,
                      border: `1px solid ${theme.palette.divider}`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Typography variant="subtitle2" sx={{ 
                        fontWeight: 600,
                        textAlign: 'center',
                        fontSize: '0.85rem'
                      }}>
                        {skill.name}
                      </Typography>
                      {renderSkillLevel(skill.proficiency)}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;