import React from "react";
import "./App.css";

import { Box, Typography } from "@mui/material";

import { animated, useSpring } from "react-spring";

import Gradient from "./components/Gradient/gradient";
import Stars from "./components/Stars/stars";

import "@fontsource/roboto/200.css";

function App() {
  const textFade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 150,
  });

  return (
    <div className="App">
      <header className="App-header">
        <Box
          sx={{
            maxWidth: "1200px", // optional: cap the width so lines don’t get too long
            mx: "auto", // center horizontally
            boxSizing: "border-box", // include padding in the width
            px: 8, // left/right stay the same
            py: 8,

            // drop shadow
            bgcolor: "rgba(255, 255, 255, 0.3)",
            boxShadow: "-5px 8px 18px black",
            borderRadius: "8px",
          }}
        >
          <animated.div style={textFade}>
            <Typography
              variant="h3"
              component="h3"
              align="left"
              sx={{ mb: 2 }} // space below heading
            >
              Hello, nice to meet you.
            </Typography>

            <Typography variant="subtitle1" sx={{ mb: 4, lineHeight: 1.6 }}>
              My name is Damon Dooley-Vrstala, thanks for stopping by to check
              out my portfolio. Growing up, I have always had an interest in
              computers and technology. I decided to fully start my development
              journey in 2022, after moving to Halifax from St. John’s and
              deciding to undergo a change in career paths.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              align="right"
              sx={{ mb: 2 }}
            >
              Experience and education.
            </Typography>

            <Typography variant="subtitle1" sx={{ lineHeight: 1.6 }}>
              I am a graduate of Nova Scotia Community College’s IT Campus, and
              completed my studies in June of 2024. I am currently working for
              UK-based record label Kurate Music as both a software developer
              and as a part of their curation team.
            </Typography>
          </animated.div>
        </Box>
        <Gradient />
        <Stars />
      </header>
    </div>
  );
}

export default App;
