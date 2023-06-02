import { Button, Container, Stack, colors } from "@mui/material";
import React from "react";

const Contact_form = (props) => {
  const style = {
    input: {
      //   backgroundColor: "red",
      padding: "16px 5px",
      width: "48%",
      outline: "none",
      border: "none",
      borderBottom: "1px solid #03BFCB",
    },
    textarea: {
      padding: "0px 6px",
      outline: "none",
      border: "none",
      borderBottom: "1px solid #03BFCB",
    },
  };

  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{ display: "flex", flexDirection: "column", gap: "55px" }}
    >
      <Stack direction="row" justifyContent="space-between">
        <input style={style.input} name="name" placeholder="Name" />
        <input style={style.input} name="email" placeholder="Email" />
      </Stack>
      <Stack spacing={3.6}>
        <textarea
          style={style.textarea}
          rows="5"
          //   cols="5"
          placeholder="Message"
        ></textarea>
        <Button
          disableElevation={true}
          sx={{
            width: "152px",
            padding: "11px 0px",
            borderRadius: "2px",
            border: "none",
            backgroundColor: "#03BFCB",
            color: "#f8f8f8",
            transition: "ease-in-out .5s",
            cursor: "pointer",
            ":hover": {
              backgroundColor: "#004767",
              transform: "scale(0.95)",
            },
          }}
          variant="contained"
        >
          Send message
        </Button>
        {/* <button style={style?.button}>Send message</button> */}
      </Stack>
    </Container>
  );
};

export default Contact_form;
