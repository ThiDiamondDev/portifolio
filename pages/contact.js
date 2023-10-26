import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import theme from "../src/theme";
import { useRouter } from "next/router";
import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import MyCard from "../components/Card";
import { Tooltip } from "@mui/material";
import { links } from "../components/Links";
import ContactContent from "../content/contact";
import Header from "../components/Header";

function ContactButton({ item, onClick }) {
  return (
    <Tooltip title={item.name}>
      <Button
        size="large"
        color="green"
        style={{ color: "black" }}
        variant="contained"
        onClick={onClick}
      >
        <item.Icon />
      </Button>
    </Tooltip>
  );
}

export default function Home() {
  const { locale, push } = useRouter();
  const { title, cards, pageContent } = ContactContent[locale];
  return (
    <>
      <Header title={title} />
      <CssBaseline />
      <main style={{ background: theme.palette.background.main }}>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.main",
            pt: 12,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="colors.white"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="colors.white"
              paragraph
            >
              {pageContent}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {links.slice(0, 3).map((item, index) => (
                <ContactButton
                  key={index}
                  item={item}
                  onClick={() => push(item.link)}
                />
              ))}
            </Stack>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {links.slice(3, 5).map((item, index) => (
                <ContactButton
                  key={index + 3}
                  item={item}
                  onClick={() => push(item.link)}
                />
              ))}
            </Stack>
          </Container>
          <Container sx={{ bgcolor: "background.main", py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((item, index) => (
                <MyCard
                  item={item}
                  handleOpen={() => handleOpen(image)}
                  key={index}
                />
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
    </>
  );
}
