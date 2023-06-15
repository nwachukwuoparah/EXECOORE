import { Stack, Typography } from "@mui/material";
import React from "react";

const About_component = (props) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      // bgcolor="red"
      spacing={{ xs: 4, md: 0 }}
    >
      <Stack
        sx={{
          width: { xs: "100%", md: "48.5%" },
          bgcolor: "grey",
          objectFit: "contain",
          bgcolor: "#F8F8F8",
        }}
      >
        <img src={props.image} />
      </Stack>

      <Stack
        sx={{
          width: { xs: "100%", md: "50%" },
          padding: { xs: "0px", md: "0px 30px 0px " },
        }}
        spacing={4.5}
      >
        <Stack>
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
        </Stack>

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
          </Stack>)}
        
      </Stack>
    </Stack>
  );
};

export default About_component;
