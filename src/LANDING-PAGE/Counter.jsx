import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import NumberGenerator from "../COMPONENTS/NumberGenerator";
const Counter = ({ arr }) => {
  return (
    <Stack
      variant="span"
      // spacing={3}
      direction={{ xs: "column", md: "row" }}
      bgcolor="rgb(255, 255, 255)"
      sx={{
        position: "relative",
        top: "-91px",
        padding: "31px 0px",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
        borderRadius: "3px",
      }}
    >
      {arr.map((i) => (
        <Stack
          variant="span"
          direction="row"
          alignItems="center"
          spacing={2.5}
          borderRight={
            i.padding && { xs: "none", md: "1px solid rgb(188, 206, 216)" }
          }
          height={{ xs: "76px", md: "107px" }}
          width={{ xs: "0px", md: i.width }}
          padding={{ xs: "0px 0px 0px 31px", md: "20px 0px 20px 31px" }}
        >
          <Stack
            sx={{
              width: "50px",
              height: "50px",
              minWidth: "50px",
              lineHeight: "50px",
              borderRadius: "3px",
              fontSize: "22px",
              boxShadow: " 0 1px 4px rgba(0, 0, 0, 0.15)",
              textAlign: "center",
              bgcolor: "rgb(0, 71, 103)",
            }}
          ></Stack>
          <Stack>
            <Typography
              variant="h3"
              // gutterBottom={0}
              sx={{
                color: "rgb(0, 71, 103)",
                fontWeight: 900,
                textTransform: "none",
                fontSize: "14px",
              }}
            >
              {i.title}
            </Typography>

            <Stack variant="span" direction="row" spacing={0.5}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  fontSize: "25px",
                  color: "#02bfcb",
                  lineHeight: "35px",
                }}
              >
                {NumberGenerator(i.number, i.time)}
              </Typography>

              <Typography
                variant="p"
                sx={{
                  fontWeight: 900,
                  fontSize: "14px",
                  paddingTop: "6px",
                  color: "rgb(0, 71, 103)",
                  lineHeight: "30px",
                }}
              >
                +
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Counter;
