import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { FaGithub } from "react-icons/fa";

const FooterWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
  padding: "1rem 0",
  boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
  zIndex: 1000
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    textAlign: "center"
  }
}));

const GithubLink = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  color: "#ffffff",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    transform: "translateY(-2px)"
  },
  "&:focus": {
    outline: "2px solid #ffffff",
    outlineOffset: "2px"
  }
}));

const AnimatedGithubIcon = styled(IconButton)(({ theme }) => ({
  color: "#ffffff",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "rotate(360deg)",
    backgroundColor: "transparent"
  }
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <GithubLink 
          href="https://github.com/keplerity/web-divideFoodorThing/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ดูใน github"
        >
          <AnimatedGithubIcon aria-hidden="true">
            <FaGithub size={24} />
          </AnimatedGithubIcon>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              letterSpacing: "0.5px",
              "&:hover": {
                textDecoration: "underline"
              }
            }}
          >
            ดูใน github
          </Typography>
        </GithubLink>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;