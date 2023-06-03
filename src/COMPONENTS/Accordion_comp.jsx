import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Accordion_comp = (props) => {
  return (
    <Accordion>
      <AccordionSummary
        id="benefits"
        aira-aria-controls="benefit controls"
        expandIcon={<ArrowForwardIosIcon />}
      >
        <Typography></Typography>
      </AccordionSummary>
      <Typography></Typography>
      <AccordionDetails></AccordionDetails>
    </Accordion>
  );
};

export default Accordion_comp;
