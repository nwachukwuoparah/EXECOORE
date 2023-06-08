import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = (props) => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{  bgcolor: "#004767", height: "408px" ,marginTop:"188px"}}
    >
      <Stack
        sx={{
          width: {
            xs: "85%",
            sm: "85%",
            md: "84%",
            lg: "83",
            xl: "85",
          },
        }}
      >
        <Typography>fiid</Typography>
      </Stack>
      <Stack>
        <Stack></Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
