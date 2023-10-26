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
import TransitionsModal from "../components/Modal";
import MyImageList from "../components/ImageList";
import MySwiper from "../components/MySwiper";
import IndexContent from "../content";
import Header from "../components/Header";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setImage] = React.useState({ title: "", img: "" });
  const handleOpen = (image) => {
    setImage(image);
    setOpen(true);
  };
  const { locale, push } = useRouter();
  const { pageContent, contactButtonText, aboutButtonText } =
    IndexContent[locale];
  return (
    <>
      <Header title={"Home"} />
      <TransitionsModal
        image={currentImage}
        open={open}
        handleClose={() => setOpen(false)}
      />
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
              Thiago Santana
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
              sx={{ pt: 4, mb: 10 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                size="large"
                color="green"
                style={{ color: "black" }}
                variant="contained"
                onClick={() => push(`${locale}/contact`)}
              >
                {contactButtonText}
              </Button>
              <Button
                size="large"
                color="green"
                variant="outlined"
                onClick={() => push(`${locale}/about`)}
              >
                {aboutButtonText}
              </Button>
            </Stack>
          </Container>
          <MySwiper style={{ padding: 150 }} />
        </Box>
        <Container sx={{ bgcolor: "background.main", py: 8 }} maxWidth="md">
          <MyImageList onClick={handleOpen} />
        </Container>
      </main>
    </>
  );
}
