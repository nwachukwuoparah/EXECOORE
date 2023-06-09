import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = (props) => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        bgcolor: "#004767",
        height: "408px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack
        sx={{
          width: {
            xs: "85%",
            sm: "85%",
            md: "85%",
            lg: "83",
            xl: "85",
          },
          bgcolor: "red",
          margin: "0px auto",
        }}
      >
        <Typography>fiid</Typography>
      </Stack>

      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          bgcolor: "",
          paddingTop: "15px",
          paddingBottom: "15px",
          borderTop: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: {
              xs: "85%",
              sm: "85%",
              md: "85%",
              lg: "83",
              xl: "85",
            },
            color: "#fff",
            margin: "0px auto",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" spacing={.5}>
            <Typography
              sx={{
                fontSize: "12px",
                letterSpacing: ".5px",
                lineHeight: "30px",
                fontWeight: 500,
              }}
            >
              © 2019 Execoore - Technology And Business Template Handmade by
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                letterSpacing: ".5px",
                lineHeight: "30px",
                fontWeight: 500,
                color:"#03BFCB",
                "&:after": {
                  content: `" ."`,
                  color: "#fff",
                },
              }}
            >
              schiocco.com
            </Typography>
          </Stack>

          <Stack direction="row" spacing={0.5}>
            <Typography
              sx={{
                fontSize: "12px",
                letterSpacing: ".5px",
                lineHeight: "30px",
                fontWeight: 500,
                color: "#03BFCB",
                "&:after": {
                  content: `" |"`,
                  color: "#fff",
                },
              }}
            >
              Contact us{" "}
            </Typography>
            {/* <Typography>|</Typography> */}
            <Typography
              sx={{
                fontSize: "12px",
                letterSpacing: ".5px",
                lineHeight: "30px",
                fontWeight: 500,
                color: "#03BFCB",
              }}
            >
              Privacy policy
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
};

export default Footer;
