import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Link as MuiLink,
  useMediaQuery,
} from "@mui/material";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/google.png";
import Twitter from "../../assets/twitter.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Github from "../../assets/github.png";

const Footer = () => {
  const isMobile584 = useMediaQuery("(max-width:584px)");

  const iconStyle = {
    width: isMobile584 ? 32 : 26,
    height: isMobile584 ? 32 : 26,
    cursor: "pointer",
  };

  return (
    <Box
      sx={{
        bgcolor: "#FAFAFA",
        color: "#333",
        mt: 8,
        px: { xs: 3, sm: 4, md: 6 },
        pt: { xs: 6, sm: 8 },
        pb: { xs: 4, sm: 6 },
        fontFamily: "Urbanist, sans-serif",
      }}
    >

      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ maxWidth: "1200px", mx: "auto", textAlign: "left" }}
      >

        <Grid item xs={12} md={2}>
          <Typography fontWeight={600} fontSize="16px" gutterBottom>
            Quick Links
          </Typography>
          {["Home", "About", "Services", "FAQ"].map((text) => (
            <Typography
              key={text}
              fontSize="14px"
              color="text.secondary"
              mb={0.5}
              sx={{ cursor: "pointer" }}
            >
              {text}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography fontWeight={600} fontSize="16px" gutterBottom>
            Help
          </Typography>
          {["Customer Support", "Terms & Conditions", "Privacy Policy"].map(
            (text) => (
              <Typography
                key={text}
                fontSize="14px"
                color="text.secondary"
                mb={0.5}
                sx={{ cursor: "pointer" }}
              >
                {text}
              </Typography>
            )
          )}
        </Grid>


        <Grid item xs={12} md={2}>
          <Typography fontWeight={600} fontSize="16px" gutterBottom>
            Contact
          </Typography>
          {["Mail", "Number"].map((text) => (
            <Typography
              key={text}
              fontSize="14px"
              color="text.secondary"
              mb={0.5}
              sx={{ cursor: "pointer" }}
            >
              {text}
            </Typography>
          ))}
        </Grid>


        <Grid item xs={12} md={3}>
          <Typography fontWeight={600} fontSize="16px" gutterBottom>
            Install App Now Available
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile584 ? "row" : "column",
              gap: 1,
              mt: 1,
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <img
              src={appstore}
              alt="App Store"
              style={{
                width: isMobile584 ? "50%" : 140,
                cursor: "pointer",
              }}
              onClick={() => window.open("https://apps.apple.com/", "_blank")}
            />
            <img
              src={playstore}
              alt="Google Play"
              style={{
                width: isMobile584 ? "50%" : 140,
                cursor: "pointer",
              }}
              onClick={() =>
                window.open("https://play.google.com/store", "_blank")
              }
            />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5, maxWidth: "1200px", mx: "auto" }} />
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: 1,
          overflow: "hidden",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © Copyright 2025. All Rights Reserved by Easha24x7
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <MuiLink href="#" color="inherit">
            <img src={Facebook} alt="Facebook" style={iconStyle} />
          </MuiLink>
          <MuiLink href="#" color="inherit">
            <img src={Twitter} alt="Twitter" style={iconStyle} />
          </MuiLink>
          <MuiLink href="#" color="inherit">
            <img src={Instagram} alt="Instagram" style={iconStyle} />
          </MuiLink>
          <MuiLink href="#" color="inherit">
            <img src={Github} alt="Github" style={iconStyle} />
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;