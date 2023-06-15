import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
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
      spacing={1.4}
     
    >
      <Typography
        sx={{ fontWeight: 700, fontSize: "13px", lineHeight: "50px", letterSpacing:"1px"}}
      >
        {props.title}
      </Typography>
      <MdKeyboardArrowDown />


      {props.list && hover && (
        <Stack
          position="absolute"
          top={props.drop ? "50px" : "150px"}
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
