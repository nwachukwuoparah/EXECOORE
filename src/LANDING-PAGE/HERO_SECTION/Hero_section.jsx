import "./hero_section.css";
import { Container, Stack, Typography, colors } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Image from ".././Images/man-3.png";
import "animate.css";

const Hero_section = (props) => {
  return (
    <section className="hero_section">
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          width: {
            xs: "81%",
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
            width: { xs: "100%", md: "58.3%" },
            // bgcolor: { xs: "#f8f8f8" },
            marginTop: "100px",
          }}
          spacing={4}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              fontSize: { md: "21px", xs: "18px" },
              lineHeight: { md: "", xs: "30px" },
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
                lineHeight: { xs: "45px", md: "65px" },
                fontSize: { xs: "33px", md: "45px" },
                color: "rgb(0, 71, 103)",
                letterSpacing: "2px",
              }}
            >
              HARDWARE TO POWER
              <br />
              YOUR BUSINESS
            </Typography>
          </div>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "13px", md: "14px" },
              color: "rgb(64, 77, 96)",
              lineHeight: "30px",
              // bgcolor: "red",
              paddingTop: "10.5px",
            }}
          >
            Try now our free trial membership. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariature irure dolore.
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 2.5 }}
            sx={{
              paddingTop: "6px",
              flexWrap: {
                xs: "wrap",
                md: "non-wrap",
                justifyContent: { xs: "center" },
              },
              // bgcolor: "red",
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                padding: { xs: "5px 20px", md: "5px 27px" },
                height: { xs: "auto", md: "52.5px" },
                fontSize: { xs: "14px", md: "15px" },
                fontWeight: 600,
                bgcolor: "#03BFCB",
                borderRadius: "3px",
                lineHeight: "30px",
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
                padding: { xs: "5px 20px", md: "5px 27px" },
                height: { xs: "auto", md: "52.5px" },
                fontSize: { xs: "14px", md: "15px" },
                fontWeight: 600,
                borderRadius: "3px",
                lineHeight: "30px",
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
            display: { xs: "none", md: "flex" },
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
