import {
  Button,
  ButtonGroup,
  Container,
  Fab,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import "./footer.css";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { BsDash } from "react-icons/bs";
const Footer = (props) => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        bgcolor: "#004767",
        // height: "408px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "82px",
        gap: { xs: "84px", md: "80px" },
        // marginTop: "100px",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        sx={{
          width: {
            xs: "81%",
            sm: "85%",
            md: "85%",
            // lg: "83",
            // xl: "85",
          },
          bgcolor: "",
          margin: "0px auto",
          position: "relative",
        }}
        spacing={{ xs: 5.8, md: 0 }}
      >
        <Stack
          sx={{ width: { xs: "100%", md: "30.3%" }, bgcolor: "" }}
          spacing={{ xs: 2, md: 4 }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 900, fontSize: "21px", color: "#FFF" }}
          >
            EXECOORE
          </Typography>

          <Stack spacing={{ xs: 2, md: 3.6 }}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                color: "#FFF",
                lineHeight: "30px",
                opacity: 0.8,
              }}
            >
              Full suite enable teams to develop unique <br />
              search and discovery experiences.
            </Typography>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{ width: "0px", height: "34px" }}
            >
              {[
                {
                  icons: <FaFacebookF style={{ fontSize: "16px" }} />,
                  color: "white",
                  bg: "#3B5998",
                },
                {
                  icons: <FaTwitter style={{ fontSize: "16px" }} />,
                  color: "white",
                  bg: "#3B8ACA",
                },
                {
                  icons: <InstagramIcon style={{ fontSize: "16px" }} />,
                  color: "white",
                  bg: "#464646",
                },
                {
                  icons: <FaTwitter style={{ fontSize: "16px" }} />,
                  color: "white",
                  bg: "#B90B20",
                },
              ].map((i) => (
                <IconButton
                  sx={{
                    width: "45px",
                    bgcolor: "grey",
                    borderRadius: "2px 0px 0px 1px",
                    backgroundColor: i.bg,
                    borderColor: "#3B5998",
                    color: i.color,
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#02bfcb",
                    },
                  }}
                >
                  {i.icons}
                </IconButton>
              ))}
            </ButtonGroup>
          </Stack>
        </Stack>

        <Stack
          sx={{
            width: { xs: "100%", md: "33.3%" },
            bgcolor: "",
            paddingLeft: { xs: "0px", md: "9px" },
          }}
          spacing={{ xs: 1.5, md: 4 }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 900, fontSize: "21px", color: "#FFF" }}
          >
            RESOURCES
          </Typography>
          <Stack>
            {[
              { title: " Partners and advertising" },
              { title: "About us and the company" },
              { title: "Services and projects" },
              { title: "Contact us online" },
            ].map((i) => (
              <div className="resource">
                <BsDash className="resource_icon" />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#FFF",
                    lineHeight: "30px",
                    opacity: 0.8,
                  }}
                >
                  {i.title}
                </Typography>
              </div>
            ))}
          </Stack>
        </Stack>

        <Stack
          sx={{
            minWidth: { xs: "100%", md: "33.3%" },
            bgcolor: " rgba(0, 0, 0, 0.11)",
            padding: "30px",
            borderRadius: "3px",
            color: "#FFF",
            // boxSizing: "content-box",
          }}
        >
          {[
            {
              text1: "Address",
              text2: "139 Baker St, E1 7PT, London",
              width: "20%",
            },
            {
              text1: "Email",
              text2: "contacts@example.com",
              width: "35%",
            },
            {
              text1: "Phone",
              text2: "(02) 123 333 444",
              width: "47%",
            },
            {
              text1: "Opening hours",
              text2: "8am-5pm Mon - Fri",
              width: "27%",
            },
          ].map((i) => (
            <Stack direction={{ xs: "column", md: "row" }}>
              <Typography
                sx={{
                  color: "#fff",
                  lineHeight: "30px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {i.text1}
              </Typography>
              <hr className="hr" style={{ width: i.width }} />
              <Typography
                sx={{
                  color: "#fff",
                  lineHeight: "30px",
                  fontSize: "14px",
                  fontWeight: "500",
                  overflow: "visible",
                  whiteSpace: "nowrap",
                  opacity: 0.8,
                  bgcolor: "",
                  margin: "0 5px",
                  display: "block",
                  marginDlockStart: "1em",
                  marginDlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                {i.text2}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          bgcolor: "",
          paddingTop: "15px",
          paddingBottom: "15px",
          borderTop: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            width: {
              xs: "81%",
              sm: "85%",
              md: "85%",
              lg: "83",
              xl: "85",
            },
            color: "#fff",
            margin: "0px auto",
            justifyContent: "space-between",
          }}
        >
          <Stack direction={{ xs: "column", md: "row" }} spacing={0.5}>
            <Typography
              sx={{
                fontSize: "12px",
                letterSpacing: ".5px",
                lineHeight: "30px",
                fontWeight: 500,
              }}
            >
              © 2019 Execoore - Technology And Business Template Handmade by
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                letterSpacing: ".5px",
                lineHeight: "30px",
                fontWeight: 500,
                color: "#03BFCB",
                "&:after": {
                  content: `" ."`,
                  color: "#fff",
                },
              }}
            >
              schiocco.com
            </Typography>
          </Stack>

          <Stack direction="row" spacing={0.5}>
            <Typography
              sx={{
                fontSize: "12px",
                letterSpacing: ".5px",
                lineHeight: "30px",
                fontWeight: 500,
                color: "#03BFCB",
                "&:after": {
                  content: `" |"`,
                  color: "#fff",
                },
              }}
            >
              Contact us{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                letterSpacing: ".5px",
                lineHeight: "30px",
                fontWeight: 500,
                color: "#03BFCB",
              }}
            >
              Privacy policy
            </Typography>
          </Stack>
        </Stack>
      </Container>
      {/* <Fab
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        sx={{
          position: "fixed",
          top: { xs: "91vh", md: "670px" },
          right: 20,
          bgcolor: "#004767",
          color: "white",
          transition: "all .5s",
          ":hover": {
            bgcolor: "#004767",
            top: { xs: "91vh", md: "660px" },
          },
        }}
        size="small"
        aria-label="to top"
      >
        <KeyboardArrowUpIcon sx={{ fontSize: "35px" }} />
      </Fab> */}
    </Container>
  );
};

export default Footer;
