import React from 'react';
import { Box, Typography, Paper, Divider, Chip, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Experience = ({ experiences }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="experience" sx={{ py: 6, px: { xs: 2, md: 4 },  }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ 
        mb: 4, fontWeight: 'bold', color: theme.palette.primary.main, position: 'relative',
        '&:after': {
          content: '""', display: 'block', width: '80px', height: '4px',
          margin: '16px auto 0', borderRadius: '2px'
        }
      }}>
        Professional Journey
      </Typography>

      <Box sx={{ 
        maxWidth: '1000px', mx: 'auto', position: 'relative',
        '&:before': {
          content: '""', position: 'absolute',
          left: { xs: '18px', sm: '20px' }, top: 0, bottom: 0,
          width: '2px', zIndex: 1
        }
      }}>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Box 
              sx={{
                position: 'relative', mb: 4, pl: { xs: 6, sm: 8 }, pr: { xs: 2, sm: 4 },
                '&:hover .experience-dot': {
                  transform: 'scale(1.2)', backgroundColor: theme.palette.secondary.main
                }
              }}
            >
              <Box className="experience-dot" sx={{
                position: 'absolute', left: { xs: '8px', sm: '10px' }, top: 0,
                width: { xs: '24px', sm: '32px' }, height: { xs: '24px', sm: '32px' },
                borderRadius: '50%', backgroundColor: theme.palette.primary.main,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', zIndex: 2, transition: 'all 0.3s ease',
                boxShadow: theme.shadows[4]
              }}>
                <WorkIcon fontSize="small" />
              </Box>

              <Paper elevation={3} sx={{
                p: 3, borderRadius: '12px',
                backgroundColor: theme.palette.background.default,
                borderLeft: `4px solid ${theme.palette.primary.main}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)', boxShadow: theme.shadows[6]
                },
                backgroundColor: 'rgba(255, 255, 255, 0.25)', // 👈 semi-transparent white
                backdropFilter: 'blur(4px)', // optional: soft blur effect behind it
                borderRadius: 3
              }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.dark, mb: 0.5 }}>
                      {exp.company}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, mb: 1.5 }}>
                      {exp.position}
                    </Typography>
                    <Chip label={exp.duration} size="small" sx={{
                      backgroundColor: theme.palette.action.selected,
                      color: theme.palette.text.primary, mb: 2
                    }} />
                    <Typography variant="body1" paragraph sx={{ color: theme.palette.text.primary, mb: 2 }}>
                      {exp.description}
                    </Typography>
                  </Box>

                  <Divider orientation={isMobile ? 'horizontal' : 'vertical'} flexItem />

                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <StarBorderIcon fontSize="small" />
                      Key Responsibilities
                    </Typography>
                    <Box component="ul" sx={{
                      pl: 2, mb: 0,
                      '& li': {
                        mb: 1, fontSize: '0.9rem', position: 'relative',
                        '&:before': {
                          content: '"•"', color: theme.palette.primary.main,
                          position: 'absolute', left: '-16px'
                        }
                      }
                    }}>
                      {exp.responsibilities.split('\n').map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
