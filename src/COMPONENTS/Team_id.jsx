import { Stack, Typography } from "@mui/material";
import React from "react";

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import InstagramIcon from "@mui/icons-material/Instagram";
const Team_id = ({ image }) => {
  return (
    <div className="team_contain">  
      <div className=" cnt-box-team">  
        <img className="team_image" src={image} alt="image" />  

        <div className="caption">
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
        </div>
      </div>
    </div>
  );
};

export default Team_id;
