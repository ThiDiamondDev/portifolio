import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import { Avatar, Paper } from "@mui/material";
import { aboutDescription } from "../components/Content";

export default function About() {
  return (
    <ThemeProvider theme={theme}>
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
              <Typography variant="body1" align="justify" color="colors.white">
                &emsp;Hello! I’m a web and mobile developer with experience in
                game development and 3D modeling and sculpting. I specialize in
                creating interactive and engaging experiences for users. My
                skills include HTML, CSS, JavaScript, React, Unity, Blender, and
                Maya. I have worked on several projects ranging from simple
                websites to complex mobile applications and games. I am
                passionate about creating innovative solutions that meet the
                needs of my clients.
                <br />
                <br />
                &emsp;I have a strong understanding of user experience and
                design principles. I am skilled in creating responsive designs
                that work seamlessly across different devices. I am also
                experienced in creating 3D models and animations that can be
                used in games and other interactive applications. I am
                passionate about staying up-to-date with the latest technologies
                and trends in the industry to ensure that my clients receive the
                best possible solutions
                <br />
                <br />
                &emsp;I am skilled in understanding my clients needs and
                requirements and providing them with customized solutions that
                meet their specific goals. I am also experienced in working with
                teams and collaborating with other developers, designers, and
                stakeholders to ensure that projects a re completed on time and
                within budget.
              </Typography>
            </Paper>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
