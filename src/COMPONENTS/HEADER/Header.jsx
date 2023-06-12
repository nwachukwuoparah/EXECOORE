import { Container, Stack, Typography } from "@mui/material";
import "./header.css";
import React, { useEffect, useState } from "react";
import Header_select from "../Header_select";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "./image/logo.svg";
import EN from "./image/en.png";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  const [menu, setMenu] = useState(false);

  // {
  /* xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536, */
  // }

  console.log(1650 * 15);
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
      console.log("call");
      setDrop(false);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

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

  useEffect(() => {
    // console.log(`drop ${drop}`);
    // console.log(`scroll ${scroll}`);
  }, [drop, scroll]);
  return (
    <>
      <Container
        varant="div"
        disableGutters
        maxWidth={false}
        sx={
          scroll
            ? {
                bgcolor: "#004767",
                position: { md: "fixed", sm: "relative", xs: "fixed" },
                width: "100%",
                top: drop ? "0px" : "-150px",
                zIndex: 1000,
                transition: drop ? "ease-in-out 1s" : null,
                fontWeight: 900,
              }
            : {
                bgcolor: "#004767",
                position: { md: "fixed", sm: "relative", xs: "fixed" },
                top: "0px",
                width: "100%",
                zIndex: 1000,
                fontWeight: 900,
              }
        }
      >
        <Container
          varant="div"
          sx={{
            display: scroll ? { md: "none", xs: "flex" } : "flex",
            alignItems: "center",
            width: { xs: "85%", sm: "92%", md: "84.4%" },
            justifyContent: "space-between",
            height: { xs: "65px", md: "100px" },
            // bgcolor: "grey",
          }}
          disableGutters
        >
          <img className="header_image" src={Logo} alt="logo" />
          <FiMenu onClick={() => setMenu(!menu)} className="header_menu" />
          <Stack
            varant="div"
            direction="row"
            alignItems="center"
            spacing={5.5}
            sx={{ color: "white", display: { xs: "none", md: "flex" } }}
            // bgcolor="red"
          >
            <Stack
              varant="div"
              sx={{
                borderRight: "1px solid #fff",
                paddingRight: "45px",
                // bgcolor: "grey",
                justifyContent: "flex-end",
                textAlign: "right",
                fontSize: "12px",
                lineHeight: "21px",
              }}
            >
              139 Baker Street
              <br /> London, United Kingdom
            </Stack>

            <ShoppingCartIcon
              style={{
                fontSize: "22px",
                height: "50px",
                lineHeight: "65px",
                cursor: "pointer",
                display: "block",
                textAlign: "center",
              }}
            />

            <SearchOutlinedIcon
              style={{
                fontSize: "22px",
                height: "50px",
                lineHeight: "65px",
                cursor: "pointer",
                display: "block",
                textAlign: "center",
              }}
            />

            <Stack
              varant="div"
              direction="row"
              spacing={1}
              alignItems="center"
              height="65px"
            >
              <img
                style={{
                  maxWidth: "100%",
                  display: "inlineBlock",
                  borderRadius: "2px",
                }}
                src={EN}
              />

              <Typography
                sx={{ lineHeight: "30px", fontSize: "14px", fontWeight: 500 }}
              >
                EN
              </Typography>
            </Stack>
          </Stack>
        </Container>

        <Container
          varant="div"
          sx={{
            width: "100%",
            height: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.25)",
            display: { xs: "none", md: "block" },
          }}
          disableGutters
          maxWidth={false}
        >
          <Container
            varant="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "84%",
            }}
            disableGutters={true}
          >
            <Stack
              varant="div"
              direction="row"
              // alignItems="center"
              height="18px"
              color="white"
              sx={{ width: "49%" }}
              spacing={3.1}
              // bgcolor="red"
            >
              {MENU?.map((i) => (
                <Header_select drop={drop} {...i} />
              ))}
            </Stack>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: "13px",
                lineHeight: "50px",
                letterSpacing: ".6px",
                color: "#f8f8f8",
                "&:after": {
                  content: '" (023) 112 589 "',
                  color: "#03BFCB",
                },
              }}
            >
              CALL US:
            </Typography>
          </Container>
        </Container>
      </Container>

      <Stack
        varant="div"
        sx={
          scroll
            ? {
                display: { xs: "block", md: "none" },
                position: "fixed",
                height: menu ? "48vh" : "0px",
                bgcolor: "lightgreen",
                overflow: "hidden",
                transition: drop ? "ease-in-out  1s" : null,
                backgroundColor: "white",
                top: drop ? "65px" : "-430px",
                // top:  "-240px",
                zIndex: 800,
              }
            : {
                display: { xs: "block", md: "none" },
                position: "fixed",
                height: menu ? "558px" : "0px",
                bgcolor: "lightgreen",
                overflow: "hidden",
                transition: "ease-in-out 1s",
                backgroundColor: "white",
                top: menu ? "65px" : "54px",
                zIndex: 800,
              }
        }
      >
        {[
          { title: "HOME" },
          { title: "PAGES" },
          { title: "PROJECTS" },
          { title: "BLOG" },
          { title: "CONTACT" },
        ].map((i) => (
          <Stack
            sx={{
              width: "100vw",
              border: ".5px solid rgba(9, 59, 86, 0.12)",
              display: "flex",
              alignItems: "center",
              padding: "14.5px 0px ",
            }}
          >
            <NavLink
              // className={({ isActive }) => (isActive ? "header_nav_active" : "header_nav")}
              className="header_nav"
            >
              <Typography sx={{ fontWeight: 700, fontSize: "13px" }}>
                {i.title}
              </Typography>
              <KeyboardArrowDownIcon
                style={{ fontWeight: 900, fontSize: "15px" }}
              />
            </NavLink>
          </Stack>
        ))}
        {/* mdbahbshbdvnbsekfdjabxcvkjbekhjsbdafnxbc,vjbkehdabfxhkvcbxh
        bdhvsbeax,bcjhbsfhebd,xcvjbhjvdbf,axjcbhvea,bdhjfxbzcv,behjdfcx */}
      </Stack>
    </>
  );
};

export default Header;
