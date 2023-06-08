import "./hero_section.css";
import { Container, Stack, Typography, colors } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Image from ".././Images/man-3.png";
import "animate.css";

const Hero_section = (props) => {
  return (
    <section style={{ marginTop: "149px" }} className="hero_section">
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          width: {
            xs: "85%",
            sm: "85%",
            md: "84.3%",
            // lg: "83",
            // xl: "85",
          },
          // bgcolor: "greenyellow",
          height: "100%",
          display: "flex",
        }}
      >
        <Stack
          sx={{
            width: "58.3%",
            // bgcolor: "#f8f8f8",
            marginTop: "100px",
          }}
          spacing={4}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              fontSize: " 21px",
              color: " #03BFCB",
            }}
          >
            ACCELERATE THE USER EXPERIENCE
          </Typography>
          <div className="slider animate__fadeInUp">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                lineHeight: "65px",
                fontSize: "45px",
                color: "rgb(0, 71, 103)",
                letterSpacing: "2px",
              }}
            >
              HARDWARE TO POWER
              <br /> YOUR BUSINESS
            </Typography>
          </div>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              color: "rgb(64, 77, 96)",
              lineHeight: "30px",
              // width:"500px"
            }}
          >
            Try now our free trial membership. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariature irure dolore.
          </Typography>
          <Stack direction="row" spacing={2.5} sx={{ paddingTop: "6px" }}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                padding: "5px 27px",
                height:"52.5px",
                fontSize: "15px",
                fontWeight: 600,
                bgcolor:"#03BFCB",
                borderRadius:"3px",
                lineHeight:"30px",
                color: "#fff",
                cursor: "pointer",
                textAlign: "center",
                transition: "all .5s",
                minWidth: "190px",
                "&:hover": {
                  transform: "Scale(0.95)",
                  bgcolor: "#004767",
                },
              }}
            >
              Request a quote
            </Button>
            <Button
              variant="outlined"
              disableElevation
              sx={{
                color: "#004767",
                borderColor: "#004767",
                padding: "5px 27px",
                height:"52.5px",
                fontSize: "15px",
                fontWeight: 600,
                borderRadius:"3px",
                lineHeight:"30px",
                cursor: "pointer",
                textAlign: "center",
                transition: "all .5s",
                minWidth: "190px",

                "&:hover": {
                  transform: "Scale(0.95)",
                  borderColor: "#004767",
                },
              }}
            >
              Free trial
            </Button>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "42.8%",
            // height: "100%",
            // objectFit: "cover",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginTop: "15px",
            // bgcolor:"red"
          }}
        >
          <img src={Image} className="image" />
        </Stack>
      </Container>
    </section>
  );
};

export default Hero_section;
