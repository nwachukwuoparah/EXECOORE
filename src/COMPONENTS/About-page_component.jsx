import { Stack, Typography } from "@mui/material";
import React from "react";

const About_component = (props) => {
  return (
    <Stack direction="row">
      <Stack sx={{ width: "48.5%", bgcolor: "grey", objectFit: "contain" }}>
        <img src={props.image} />
      </Stack>
      <Stack
        sx={{ width: "50%", bgcolor: "", padding: "0px 30px 0px " }}
        spacing={4.5}
      >
        <span>
          <Typography
            sx={{
              fontWeight: 700,
              color: "#03BFCB",
              lineHeight: "30px",
              fontSize: "14px",
            }}
          >
            {props.text1}
          </Typography>
          <Typography
            sx={{
              fontWeight: 900,
              color: "rgb(0, 71, 103)",
              lineHeight: "40px",
              fontSize: "28px",
            }}
          >
            Our values and goals
          </Typography>
        </span>

        <Typography
          sx={{
            fontWeight: 500,
            color: "rgb(64, 77, 96)",
            lineHeight: "30px",
            fontSize: "14px",
          }}
        >
          {props.text2}
        </Typography>
        {props.image1 && (
          <Stack direction="row" alignItems="flex-end">
            <img src={props.image1} />
            <Stack>
              <Typography
                sx={{
                  fontWeight: 800,
                  color: "rgb(64, 77, 96)",
                  lineHeight: "30px",
                  fontSize: "16px",
                }}
              >
                {props.text3}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "rgb(64, 77, 96)",
                  lineHeight: "15px",
                  fontSize: "14px",
                }}
              >
                {props.text4}
              </Typography>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default About_component;
