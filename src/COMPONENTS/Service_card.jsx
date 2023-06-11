import React from "react";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

const Service_card = (props) => {
  return (
    <Card
      sx={{
        // maxWidth: "100%",
        height: "490px",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
        transition: "ease-out 0.5s",
        position: "relative",
        top: "0px",

        "&:hover": {
          transform: { xs: "unset", md: "scale(1.01)" },
          boxShadow: {
            xs: "0 1px 4px rgba(0, 0, 0, 0.15)",
            md: "0px 7px 15px rgba(0, 0, 0, 0.3)",
          },
          top: { xs: "none", md: "-5px" },
        },
      }}
    >
      <CardMedia
        component="img"
        height="43.5%"
        width="100%"
        image={props?.image}
        alt="Service image"
        objectFit="fit"
      />
      <CardContent
        sx={{
          height: "60%",
          padding: "30px 28px 10px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "rgb(0, 71, 103)",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "35px",
          }}
        >
          {props?.text1}
        </Typography>
        <Stack direction="row">
          {props?.arr?.map((i) => (
            <Stack
              // width="30%"
              borderLeft={i.border && "1px solid grey"}
              padding={
                i.border
                  ? { xs: "0px 35px 0px 15px", md: "0px 45px 0px 15px" }
                  : { xs: "0px 30px 0px 0px", md: "0px 45px 0px 0px" }
              }
            >
              <Typography
                variant="p"
                component="p"
                sx={{
                  color: "rgb(64, 77, 96)",
                  fontSize: "12px",
                  fontWeight: 700,
                  lineHeight: "14px",
                }}
              >
                {i.text}
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{
                  color: "#03BFCB",
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "13px",
                  marginTop: "7px",
                }}
              >
                $80
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: "color: rgb(64, 77, 96)",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "30px",
          }}
        >
          {props?.text2}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service_card;
