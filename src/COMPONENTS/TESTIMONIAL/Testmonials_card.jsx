import { Stack, Typography } from "@mui/material";
import React from "react";
import "./testmonials_card.css";
import image from "./user-3.jpeg";
const Testmonial_card = (props) => {
  return (
    <Stack
      sx={{ position: "relative", width: { xs: "100%", md: "31.5%" } }}
      spacing={2}
    >
      <span className="testmonial_card_text">
        If you dont suscceed at first, there's no need for the word failure.
        They somehow already know what you truly want
      </span>
      <Stack direction="row" alignItems="center" spacing={1.6}>
        <img style={{ width: "50px", borderRadius: "50px" }} src={image} />

        <Stack>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "17px",
              color: "rgb(64, 77, 96)",
            }}
          >
            Oparah Nkume
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "17px",
              color: "#03BFCB",
            }}
          >
            Apple
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Testmonial_card;
