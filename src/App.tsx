import React from "react";
import "./App.css";

import { Box, Typography } from "@mui/material";

import Gradient from "./components/Gradient/gradient";
import Stars from "./components/Stars/stars";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
          sx={{
            maxWidth: "1200px", // optional: cap the width so lines don’t get too long
            mx: "auto", // center horizontally
            boxSizing: "border-box", // include padding in the width
            px: 32, // left/right stay the same
            py: 32,

            // drop shadow
            bgcolor: "rgba(255, 255, 255, 0.3)",
            boxShadow: "-5px 8px 18px black",
            borderRadius: "8px",
          }}
        >
          {/* put all your text/content here */}
          Hello, World!
        </Box>
        <Gradient />
        <Stars />
      </header>
    </div>
  );
}

export default App;
