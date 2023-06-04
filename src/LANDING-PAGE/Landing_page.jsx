import React, { useState, useEffect } from "react";
import "./landing_page.css";
import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Hero_section from "./HERO_SECTION/Hero_section";
import About_card from "../COMPONENTS/About-page_card";
import About_component from "../COMPONENTS/About-page_component";
import image_16 from "./Images/image-16.jpeg";
import sign_dark from "./Images/sign-dark.png";
import logo_1 from "./Images/logo-1.png";
import logo_2 from "./Images/logo-2.png";
import logo_3 from "./Images/logo-3.png";
import logo_4 from "./Images/logo-4.png";
import logo_5 from "./Images/logo-5.png";
import logo_6 from "./Images/logo-6.png";
import box_3 from "./Images/box-3.png";
import Service_card from "../COMPONENTS/Service_card";
import { Parallax } from "react-parallax";
import Contact_form from "../COMPONENTS/Contact_form";
import Testmonial_card from "../COMPONENTS/TESTIMONIAL/Testmonials_card";
import Accordion_comp from "../COMPONENTS/Accordion_comp";

const Landing_page = (props) => {
  const [scroll, setScroll] = useState();
  const ServiceCard = [
    {
      image: image_16,
      text1: "Security audit",
      arr: [
        { text: "PRICE", price: `$50` },
        { text: "PRICE", price: `$50`, border: true },
        { text: "PRICE", price: `$50`, border: true },
      ],
      text2: `Excepteur sint occaecat cupidatat non proidento
       in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      image: image_16,
      text1: "Security audit",
      arr: [
        { text: "PRICE", price: `$50` },
        { text: "PRICE", price: `$50`, border: true },
        { text: "PRICE", price: `$50`, border: true },
      ],
      text2: `Excepteur sint occaecat cupidatat non proidento
       in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      image: image_16,
      text1: "Security audit",
      arr: [
        { text: "PRICE", price: `$50` },
        { text: "PRICE", price: `$50`, border: true },
        { text: "PRICE", price: `$50`, border: true },
      ],
      text2: `Excepteur sint occaecat cupidatat non proidento
       in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      image: image_16,
      text1: "Security audit",
      arr: [
        { text: "PRICE", price: `$50` },
        { text: "PRICE", price: `$50`, border: true },
        { text: "PRICE", price: `$50`, border: true },
      ],
      text2: `Excepteur sint occaecat cupidatat non proidento
       in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      image: image_16,
      text1: "Security audit",
      arr: [
        { text: "PRICE", price: `$50` },
        { text: "PRICE", price: `$50`, border: true },
        { text: "PRICE", price: `$50`, border: true },
      ],
      text2: `Excepteur sint occaecat cupidatat non proidento
       in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      image: image_16,
      text1: "Security audit",
      arr: [
        { text: "PRICE", price: `$50` },
        { text: "PRICE", price: `$50`, border: true },
        { text: "PRICE", price: `$50`, border: true },
      ],
      text2: `Excepteur sint occaecat cupidatat non proidento
       in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ];

  useEffect(() => {
    function handleScroll() {
      setScroll(window.pageYOffset / 4);
      console.log(window.pageYOffset);
      console.log(window.pageYOffset / 4);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <Container
      disableGutters={true}
      maxWidth="100%"
      sx={{
        height: "805vh",
        // overflow: "hidden",
      }}
    >
      <Hero_section />
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          width: {
            xs: "85%",
            sm: "85%",
            md: "84%",
            lg: "83",
            xl: "85",
          },
          // bgcolor: "greenyellow",
          height: "92.5vh",
        }}
      >
        <Stack
          direction={{ xs: "row", sm: "row", md: "row" }}
          sx={{ bgcolor: "", height: "235px" }}
        >
          <Grid
            sx={{ width: "87%" }}
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            xs={5}
            sm={4}
            md={20}
          >
            {[1, 2, 3, 4].map((_, index) => (
              <Grid xs={5} sm={4} md={3} key={index}>
                <About_card />
              </Grid>
            ))}
          </Grid>
        </Stack>

        <About_component
          image={image_16}
          image1={sign_dark}
          text1=" ABOUT US"
          text2="Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod
          tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim
          veniam quis nostrud exercitation ullamco laboris."
          text3="Albert Patterson"
          text4="Founder & CEO"
        />
      </Container>

      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{ backgroundColor: "rgb(228, 237, 243)", padding: "100px 0px" }}
      >
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            width: {
              xs: "85%",
              sm: "85%",
              md: "84%",
              lg: "83",
              xl: "85",
            },
            // bgcolor: "greenyellow",
            // height: "200vh",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#03BFCB",
                  lineHeight: "30px",
                  fontSize: "14px",
                }}
              >
                OUR SERVICES
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "rgb(0, 71, 103)",
                  lineHeight: "40px",
                  fontSize: "28px",
                }}
              >
                Core Technology services
              </Typography>
            </Stack>
            <Stack
              sx={{
                color: "rgb(64, 77, 96)",
                lineHeight: "30px",
                fontSize: "14px",
              }}
            >
              {" "}
              <Typography>All services</Typography>
            </Stack>
          </Stack>

          <Stack sx={{ bgcolor: "", marginTop: "62px" }}>
            <Grid
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap="30px"
              sx={{
                bgcolor: "",
              }}
              container
              // spacing={2}
              columns={{ xs: 4, sm: 8, md: 12 }}
              xs={5}
              sm={4}
              md={20}
            >
              {ServiceCard.map((i, index) => (
                <Grid xs={5} sm={5} md={3.76} key={index}>
                  <Service_card {...i} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Container>

      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          width: {
            xs: "85%",
            sm: "85%",
            md: "84%",
            lg: "83",
            xl: "85",
          },
          padding: "100px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack spacing={4} sx={{ bgcolor: "", width: "49%" }}>
          <Stack>
            <Typography
              variant="p"
              sx={{
                fontWeight: 700,
                color: "#03BFCB",
                lineHeight: "30px",
                fontSize: "14px",
              }}
            >
              CONTACT US NOW
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                color: "rgb(0, 71, 103)",
                lineHeight: "40px",
                fontSize: "28px",
              }}
            >
              Request a free <br />
              consultation with us
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontWeight: 500,
              color: "rgb(64, 77, 96)",
              lineHeight: "30px",
              fontSize: "14px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod
            tempor incididunt utlabore et dolore aliqua.
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              color: "rgb(64, 77, 96)",
              lineHeight: "30px",
              fontSize: "14px",
            }}
          >
            You accept our policy
          </Typography>
        </Stack>
        <Stack sx={{ width: "49%", bgcolor: "" }}>
          <Contact_form />
        </Stack>
      </Container>

      <Parallax
        className="Parallax"
        // blur={{ min: -20, max: -20 }}
        strength={90}
        bgImage={image_16}
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            bgcolor: "rgb(26, 56, 250,20%)",
            padding: " 100px 0px",
          }}
          spacing={7.3}
        >
          <a className="Parallax_link"></a>
          <Typography
            sx={{
              lineHeight: "37px",
              maxWidth: "600px",
              fontSize: "25px",
              fontWeight: 900,
            }}
          >
            Find a <span className="paralax_text"> evolved </span>
            and strong connection withs software and hardware communication
          </Typography>

          <Stack bgcolor="" height="50px" direction="row">
            {[
              { image: logo_1, border: false },
              { image: logo_2, border: true },
              { image: logo_3, border: true },
              { image: logo_4, border: true },
              { image: logo_5, border: true },
              { image: logo_6, border: true },
            ].map((i) => (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                height="100%"
                bgcolor=""
                padding={i.border ? "0px 22.5px" : "0px 30px 0px 0px"}
                borderLeft={i.border && "1px solid #03bfcb"}
              >
                <img style={{ width: "128px", height: "30px" }} src={i.image} />
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Parallax>

      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          bgcolor: "rgb(228, 237, 243)",
        }}
      >
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            width: {
              xs: "85%",
              sm: "85%",
              md: "84%",
              lg: "83",
              xl: "85",
            },
            padding: "100px 0px",
            display: "flex",
            flexDirection: "column",
            gap: "47px",
          }}
        >
          <Stack>
            <Typography
              variant="p"
              sx={{
                fontWeight: 700,
                color: "#03BFCB",
                lineHeight: "30px",
                fontSize: "14px",
              }}
            >
              TESTIMONIALS FEEDBACK
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                color: "rgb(0, 71, 103)",
                lineHeight: "40px",
                fontSize: "28px",
              }}
            >
              What our clients think
            </Typography>
          </Stack>

          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            sx={{ cursor: "grab", userSelect: "none" }}
          >
            {[1, 2, 3].map((i) => (
              <Testmonial_card />
            ))}
          </Stack>
        </Container>
      </Container>

      <Container
        disableGutters
        sx={{
          width: {
            xs: "85%",
            sm: "85%",
            md: "84%",
            lg: "83",
            xl: "85",
          },
          padding:"100px 0px",
          display: "flex",
          justifyContent:"space-between",
          // bgcolor: "red",
        }}
      >
        <Stack sx={{ width: "48%" }} spacing={4}>
          <Stack>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#03BFCB",
                lineHeight: "30px",
                fontSize: "14px",
              }}
            >
              EXCLUSIVE BENEFITS
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                color: "rgb(0, 71, 103)",
                lineHeight: "40px",
                fontSize: "28px",
              }}
            >
              You should choose us
            </Typography>
          </Stack>

          <Typography
            variant="p"
            sx={{
              fontWeight: 500,
              color: "rgb(64, 77, 96)",
              lineHeight: "30px",
              fontSize: "14px",
            }}
          >
            Lorem ipsum dolor sit amet consecteture Duis aute irure dolor
            innocente reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla.
          </Typography>
          <Accordion_comp />
        </Stack>
        <Stack sx={{ width: "48.8%", alignSelf: "center" ,bgcolor:"" , objectFit:"cover"}}>
          <img src={box_3} style={{width:"100%"}} />
        </Stack>
      </Container>
    </Container>
  );
};

export default Landing_page;
