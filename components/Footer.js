import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";
import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import { Divider, Icon, Stack, Tooltip } from "@mui/material";
import { links } from "./Links";
function UnsplashLinks() {
  return (
    <>
      Photos by{" "}
      <Link
        color={"colors.green"}
        href="https://unsplash.com/@gamell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >
        Joan Gamell
      </Link>
      ,{" "}
      <Link
        color={"colors.green"}
        href="https://unsplash.com/@hansen_pix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >
        Warren Hansen
      </Link>{" "}
      and{" "}
      <Link
        color={"colors.green"}
        href="https://unsplash.com/@jagg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >
        Jose Gil
      </Link>{" "}
      on{" "}
      <Link color={"colors.green"} href="https://unsplash.com/">
        Unsplash
      </Link>
      <br />
    </>
  );
}

function Copyright() {
  const router = useRouter();
  const isContactPage = router.pathname == "/contact";
  return (
    <Typography variant="body2">
      {isContactPage && <UnsplashLinks />}
      {"Website Copyright © "}
      <Link color="colors.green" href="/contact">
        Thiago Santana
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function ContactIcon({ item }) {
  return (
    <Tooltip title={item.name}>
      <Link href={item.link} color={"colors.green"}>
        <item.Icon fontSize={"large"} />
      </Link>
    </Tooltip>
  );
}
export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "30vh",
        backgroundColor: "background.main",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 8,
          px: 2,
          mt: "auto",
          backgroundColor: "black.main",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Website created with React, Next.js and Material Design.
          </Typography>
          <br />
          <Copyright />
          <br />
          <Stack direction={"row"} spacing={1.5}>
            {links.map((item, index) => (
              <ContactIcon key={index} item={item} />
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
