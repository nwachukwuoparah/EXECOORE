import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack, Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";
const Accordion_comp = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  };
  return (
    <div>
      {[
        {
          label: "The membership cards",
          text: `Lorem ipsum dolor sit amet consectetur adipiscing elitsed
           do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur.`,
          key: "expanded1",
        },
        {
          label: "The membership cards",
          text: `Lorem ipsum dolor sit amet consectetur adipiscing elitsed
           do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur.`,
          key: "expanded2",
        },
        {
          label: "The membership cards",
          text: `Lorem ipsum dolor sit amet consectetur adipiscing elitsed
           do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur.`,
          key: "expanded3",
        },
      ].map((i) => (
        <Stack
          sx={{
            borderBottom: "1px solid rgb(0, 71, 103)",
            padding: "10px 0px 0px 0px",
            cursor: "pointer",
          }}
          onClick={() => handleChange(i.key)}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            lineHeight="20px"
          >
            <ExpandMoreIcon
              style={{
                color: "#03BFCB",
                transform: expanded !== i.key && "rotate(-90deg)",
                transition: "all .5s",
              }}
            />
            <Typography variant="p">{i.label}</Typography>
          </Stack>
          <div
            style={{
              position: "relative",
              height: expanded === i.key ? "160px" : "0",
              bgcolor: "lightgreen",
              padding: "5px 0px 5px 0px",
              overflow: "hidden",
              transition: "1s ease-in-out",
            }}
          >
            <Typography
              sx={{
                color: "rgb(64, 77, 96)",
                lineHeight: "30px",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {i.text}
            </Typography>
          </div>
        </Stack>
      ))}
    </div>
  );
};

export default Accordion_comp;
