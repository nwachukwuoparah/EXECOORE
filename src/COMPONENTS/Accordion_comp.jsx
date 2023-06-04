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
      <Stack
        sx={{
          borderBottom: "1px solid rgb(0, 71, 103)",
          padding: "10px 0px 10px 0px",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => handleChange("expanded1")}
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
              transform: expanded !== "expanded1" && "rotate(-90deg)",
              transition: "all .5s",
            }}
          />
          <Typography variant="p">The membership cards</Typography>
        </Stack>

        {expanded === "expanded1" && (
          <div
            style={{
              height: expanded === "expanded1" ? "auto" : "0",
              bgcolor: "lightgreen",
              display: expanded === "expanded1" ? "block" : "none",
              padding: "5px 0px 5px 0px",
              overflow: "hidden",
              transition: "height 0.3s ease-in-out",
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
              Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
              eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim
              ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </div>
        )}
      </Stack>

      <Stack
        sx={{
          borderBottom: "1px solid rgb(0, 71, 103)",
          padding: "10px 0px 10px 0px",
          cursor: "pointer",
        }}
        onClick={() => handleChange("expanded2")}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          // fontSize="20px"
          lineHeight="20px"
          // transition="all .5s"
        >
          <ExpandMoreIcon
            style={{
              color: "#03BFCB",
              transform: expanded !== "expanded2" && "rotate(-90deg)",
              transition: "all .5s",
            }}
          />
          <Typography variant="p">The membership cards</Typography>
        </Stack>

        <Stack
          padding="5px 0px 5px 0px"
          // display={expanded === "expanded1" ? "block" : "none"}
          overflow="hidden"
          display={expanded === "expanded2" ? "block" : "none"}
          transition="ease-in-out s"
        >
          <Typography
            sx={{
              color: "rgb(64, 77, 96)",
              lineHeight: "30px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod
            tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim
            veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Typography>
        </Stack>
      </Stack>

      <Stack
        sx={{
          padding: "10px 0px 0px 0px",
          cursor: "pointer",
        }}
        onClick={() => handleChange("expanded3")}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          // fontSize="20px"
          lineHeight="20px"
          // transition="all .5s"
        >
          <ExpandMoreIcon
            style={{
              color: "#03BFCB",
              transform: expanded !== "expanded3" && "rotate(-90deg)",
              transition: "all .5s",
            }}
          />
          <Typography variant="p">The membership cards</Typography>
        </Stack>

        <Stack
          padding="5px 0px 0px 0px"
          display={expanded === "expanded3" ? "block" : "none"}
          overflow="hidden"
          transition="ease-in-out s"
        >
          <Typography
            sx={{
              color: "rgb(64, 77, 96)",
              lineHeight: "30px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod
            tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim
            veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Accordion_comp;
