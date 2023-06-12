import { Stack, Typography, Container } from "@mui/material";
import React from "react";

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import InstagramIcon from "@mui/icons-material/Instagram";
const Team_id = ({ image }) => {
  return (
    <Container
      sx={{
        width: { xs: "100%", md: "25%" },
        marginTop: {xs:"50px", md:"0px"},
        padding:"0px"
      }}
      className="team_contain"
    >
      <Container
        sx={{
          paddingBottom: {xs:"100px", md:"100px"},
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className=" cnt-box-team"
      >
        <img className="team_image" src={image} alt="image" />

        <Container
          sx={{
            width: "100%",
            padding: "25px 50px 0 50px",
            position: "absolute",
            textAlign: "center",
            height: "100px",
            overflow: "hidden",
            backgroundColor: "#fff",
            margin: "0px auto",
            bottom: 0,
            zIndex: 9,
            right: 0,
            left: 0,
            borderTop: "1px solid rgba(10, 70, 103, 0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            transition: "all 0.5s",

          }}
          className="caption"
        >
          <Typography
            sx={{
              fontWeight: 700,
              lineHeight: "35px",
              fontSize: "15px",
              color: "rgb(0, 71, 103)",
            }}
          >
            FRANK DE VINCI
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              lineHeight: "30px",
              fontSize: "14px",
              color: " #03BFCB",
            }}
          >
            Marketing
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            color=" #03BFCB"
          >
            <FaFacebookF />
            <FaTwitter />
            <InstagramIcon />
          </Stack>
          <Typography
            sx={{
              fontWeight: 500,
              lineHeight: "22px",
              fontSize: "12px",
              color: "rgb(64, 77, 96)",
            }}
          >
            Lorem ipsum dolor sitamet consectetur eiusmo.
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

export default Team_id;
