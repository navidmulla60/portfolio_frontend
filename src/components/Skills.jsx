import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Skills = ({ skills }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const categories = [...new Set(skills.map(skill => skill.category))];

  // Compact size constants
  const SKILL_ITEM_HEIGHT = 64;
  const ROW_GAP = 8;
  const CATEGORY_PADDING = 16;
  const HEADER_HEIGHT = 44;

  const renderSkillLevel = (proficiency) => {
    const stars = [];
    const fullStars = Math.floor(proficiency / 20);
    const hasHalfStar = proficiency % 20 >= 10;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} fontSize="small" sx={{ 
          color: theme.palette.warning.main,
          fontSize: '1rem'
        }} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalfIcon key={i} fontSize="small" sx={{ 
          color: theme.palette.warning.main,
          fontSize: '1rem'
        }} />);
      } else {
        stars.push(<StarBorderIcon key={i} fontSize="small" sx={{ 
          color: theme.palette.text.disabled,
          fontSize: '1rem'
        }} />);
      }
    }

    return (
      <Box sx={{ display: 'flex', gap: 0.5, mt: 0.25 }}>
        {stars}
      </Box>
    );
  };

  const getCategoryHeight = (skillCount) => {
    const columns = skillCount > 3 ? 3 : 2;
    const rowCount = Math.ceil(skillCount / columns);
    const contentHeight = (rowCount * SKILL_ITEM_HEIGHT) + ((rowCount - 1) * ROW_GAP);
    return HEADER_HEIGHT + contentHeight + CATEGORY_PADDING;
  };

  return (
    <Box id="skills" sx={{ py: 4, px: { xs: 2, md: 3 } }}>
      <Typography variant="h5" align="center" gutterBottom sx={{ 
        mb: 3,
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        position: 'relative',
        '&:after': {
          content: '""',
          display: 'block',
          width: '60px',
          height: '3px',
          backgroundColor: theme.palette.secondary.main,
          margin: '12px auto 0',
          borderRadius: '2px'
        }
      }}>
        Technical Expertise
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 2,
        maxWidth: '1000px',
        mx: 'auto',
        alignItems: 'start'
      }}>
        {categories.map((category) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          const categoryHeight = getCategoryHeight(categorySkills.length);
          const columns = categorySkills.length > 3 ? 3 : 2; 
          
          return (
            <Box key={category} sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: categoryHeight
            }}>
              <Box sx={{
                p: 2,
                borderRadius: '8px',
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[0],
                border: `1px solid ${theme.palette.divider}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.55)', // 👈 semi-transparent white
                backdropFilter: 'blur(4px)', // optional: soft blur effect behind it
                borderRadius: 3
              }}>
                <Typography variant="subtitle1" sx={{ 
                  mb: 1,
                  fontWeight: 'bold',
                  color: theme.palette.primary.dark,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: '1rem'
                }}>
                  <Box sx={{
                    width: '6px',
                    height: '18px',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '3px'
                  }} />
                  {category}
                </Typography>
                
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  {categorySkills.map((skill) => (
                    <Box key={skill.id} sx={{
                      width: `calc(${100/columns}% - ${(8 * (columns-1))/columns}px)`, 
                      height: `${SKILL_ITEM_HEIGHT}px`,
                      p: 1,
                      borderRadius: '6px',
                      backgroundColor: theme.palette.action.hover,
                      border: `1px solid ${theme.palette.divider}`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Typography variant="body2" sx={{ 
                        fontWeight: 600,
                        textAlign: 'center',
                        fontSize: '0.8rem'
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
