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
                skills include HTML, CSS, JavaScript, React, NodeJS, Blender,
                and now my focus is build experiences with Unreal Engine.
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
                &emsp;With Unreal Engine 5, I have worked on the top of the new
                features, like Lumen, Nanite and Procedural Content Generation,
                creating beautiful, optimized and functional experiences using
                Blueprints. I also have solid skills in programming languages
                like C++, python and JavaScript to integrate in any project and
                build solutions at scale.
              </Typography>
            </Paper>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
