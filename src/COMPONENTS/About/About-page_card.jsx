import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const About_card = (props) => {
  return (
    <Card
      sx={{
        // maxWidth: "100%",
        height: {xs:"245px", md:"250px"},
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
        transition: "all .5s",
        position: "relative",
        top: { xs: "-90px", md: "-106px" },
        padding: "20px 15px 0px",
        "&:hover": {
          transform: { xs: "unset", md: "scale(1.01)" },
          boxShadow: {
            xs: "0 1px 4px rgba(0, 0, 0, 0.15)", 
            md: "0px 7px 15px rgba(0, 0, 0, 0.3)",
          },
          top: { xs: "none", md: "-110px" },
        },
      }}
    >
      <CardMedia
        component="img"
        height="40%"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent sx={{ bgcolor: "" }}>
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
          Smart softwares
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "color: rgb(64, 77, 96)",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "30px",
          }}
        >
          Duis aute irure dolor in repreherita ineto.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About_card;
