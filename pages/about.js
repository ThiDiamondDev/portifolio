import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import { Avatar, Paper } from "@mui/material";
import { aboutDescription } from "../components/Content";
import { useRouter } from "next/router";
import AboutContent from "../content/about";
import Header from "../components/Header";

export default function About() {
  const { locale } = useRouter();
  const { pageContent, headTitle } = AboutContent[locale];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title={headTitle} />
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
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Avatar
                alt="Thiago Santana"
                src="/Face.jpg"
                sx={{ width: 100, height: 100 }}
              />
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="colors.white"
                gutterBottom
                margin={"auto"}
              >
                Thiago Santana
              </Typography>
            </Container>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
            >
              {pageContent}
            </Paper>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
