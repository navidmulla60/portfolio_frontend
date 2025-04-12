import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";

const Contact = () => (
  <Box
    id="contact"
    sx={{
      py: 4,
      px: 2,
      backgroundColor: "rgba(255, 255, 255, 0.25)", // 👈 semi-transparent white
      backdropFilter: "blur(4px)", // optional: soft blur effect behind it
      borderRadius: 3,
    }}
  >
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{
        fontWeight: 800,
        textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
        letterSpacing: "0.05em",
      }}
    >
      Get In Touch
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Email sx={{ mr: 2 }} />
            <Typography
              sx={{
                fontWeight: 800,
                textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                letterSpacing: "0.05em",
              }}
            >
              navidmulla60@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Phone sx={{ mr: 2 }} />
            <Typography
              sx={{
                fontWeight: 800,
                textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                letterSpacing: "0.05em",
              }}
            >
              +91 8660744720
            </Typography>
          </Box>
          <Box>
            <IconButton
              href="https://www.linkedin.com/in/navid-mulla/"
              target="_blank"
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              href="https://github.com/navidmulla60?tab=repositories"
              target="_blank"
            >
              <GitHub fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Contact;
