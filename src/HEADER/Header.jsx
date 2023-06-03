import { Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header_select from "../COMPONENTS/Header_select";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Header = (props) => {
  const [scroll, setScroll] = useState(false);
  const [drop, setDrop] = useState(false);
  useEffect(() => {
    function handleScroll() {
      window.scrollY >= 100 ? setScroll(true) : setScroll(false);
    }

    window.addEventListener("scroll", handleScroll);

    if (scroll) {
      setTimeout(() => {
        setDrop(true);
      }, 1000);
    } else {
      // console.log("call")
      setDrop(false);
    }
    // console.log(`drop ${drop}`);
    // console.log(`scroll ${scroll}`);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll, drop]);

  const MENU = [
    {
      title: "HOME",
    },
    {
      title: "ABOUT",
      list: ["Team", "History"],
    },
    {
      title: "SERVICES",
      list: ["Security audits", "Artifical Intelligence", "Bot Support"],
    },
    {
      title: "PRICES",
    },
    {
      title: "CONTACTS",
    },
  ];

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={
        scroll
          ? {
              bgcolor: "#004767",
              display: "flex",
              alignItems: "center",
              position: "fixed",
              width: "100%",
              top: drop ? "0px" : "-150px",
              zIndex: 1000,
              transition: drop ? "ease-in-out 2s" : null,
            }
          : {
              bgcolor: "#004767",
              display: "flex",
              position: "fixed",
              top: "0px",
              alignItems: "center",
              width: "100%",
              right: "0px",
              zIndex: 1000,
              // transition: "ease-in 6s",
            }
      }
    >
      <Container
        sx={{
          // bgcolor: "red",
          width: "84%",
          height: "100%",
        }}
        disableGutters={true}
      >
        <Container
          sx={{
            display: scroll ? "none" : "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // bgcolor: "red",
            width: "100%",
            height: "100px",
            borderBottom: "1px solid #f8f8f8",
          }}
          disableGutters={true}
        ></Container>

        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // bgcolor: "red",
            width: "100%",
            height: "100%",
          }}
          disableGutters={true}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            height="50px"
            color="white"
            sx={{ width: "45%" }}
          >
            {MENU?.map((i) => (
              <Header_select drop={drop} {...i} />
            ))}
          </Stack>
          <SearchOutlinedIcon sx={{ color: "white" }} />
        </Container>
      </Container>
    </Container>
  );
};

export default Header;
