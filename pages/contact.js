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

const cards = [
  {
    image: "/joan-gamell-ZS67i1HLllo-unsplash.jpg",
    title: "Web and Mobile Development",
    description: "",
  },
  {
    image: "/warren-hansen-uCMNeSNS54U-unsplash.jpg",
    title: "3D Modeling, Rigging and Animation",
    description: "",
  },
  {
    image: "/jose-gil-2pNdTBn4C7U-unsplash.jpg",
    title: "Game Design and Production",
    description: "",
  },
];

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
  const router = useRouter();
  return (
    <>
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
              Contact me
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="colors.white"
              paragraph
            >
              Here are my social networks for especialized contact and
              assistance for any help in your favorite platform.
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
                  onClick={() => router.push(item.link)}
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
                  onClick={() => router.push(item.link)}
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
