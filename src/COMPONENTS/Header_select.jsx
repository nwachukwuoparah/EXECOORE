import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Header_select = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <Stack
      height="100%"
      direction="row"
      alignItems="center"
      sx={{ cursor: "pointer", "&:hover": { color: "#02bfcb" } }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Stack>{props.title}</Stack>
      {props.list && hover && (
        <Stack
          position="absolute"
          top={props.drop ? "57.5px" : "75px"}
          width="18%"
          bgcolor="#f8f8f8"
          borderTop="2px solid #02bfcb"
          color="black"
        >
          {props.list?.map((i) => (
            <Typography
              sx={{
                padding: "10px",
                "&:hover": {
                  backgroundColor: " #02bfcb",
                  color: "white",
                },
                transition: "ease-in-out 0.2s",
              }}
            >
              {i}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default Header_select;
