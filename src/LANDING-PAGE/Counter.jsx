import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import NumberGenerator from "../COMPONENTS/NumberGenerator";
const Counter = ({ arr }) => {
  return (
    <Stack variant="span" spacing={3}>
      {arr.map((i) => (
        <Stack variant="span" direction="column">
          <Typography
            gutterBottom={0}
            sx={{
              color: "white",
              fontWeight: 500,
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            {i.title}
          </Typography>

          <Stack variant="span" direction="row" spacing={0.5}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, fontSize: "27px", color: "#02bfcb" }}
            >
              {NumberGenerator(i.number, i.time)}
            </Typography>

            <Typography
              variant="p"
              sx={{
                fontWeight: 600,
                fontSize: "15px",
                paddingTop: "12px",
                color: "white",
              }}
            >
              +
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Counter;
