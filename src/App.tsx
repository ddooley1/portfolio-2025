import React from "react";
import "./App.css";

import { Box, Typography } from "@mui/material";

import { animated, useSpring } from "react-spring";

import Gradient from "./components/Gradient/gradient";
import Stars from "./components/Stars/stars";
import NavBar from "./components/Navbar/navbar";

import "@fontsource/roboto/200.css";

function App() {
  const textFade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 150,
  });

  const boxFade = useSpring({
    // i'll cook this later
  });

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Box
          sx={{
            // positioning
            maxWidth: "1200px",
            boxSizing: "border-box",
            flexGrow: 1,
            p: 6,
            overflow: "auto",
            height: "70vh",

            bgcolor: "rgba(255, 255, 255, 0.18)",
            backdropFilter: "blur(1.5px)",
            boxShadow: "-5px 8px 18px black",
            borderRadius: "8px",
          }}
        >
          <animated.div style={textFade}>
            <Typography
              variant="h3"
              component="h3"
              align="center"
              sx={{ mt: 2, mb:2 }}
            >
              Hello, nice to meet you
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4, lineHeight: 1.4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque iaculis interdum aliquet. Sed tristique massa sit
              amet lacinia dictum. Duis consectetur, neque sed ornare mattis,
              enim dolor feugiat justo, id euismod purus dui ut ante. Praesent
              et massa quam. Sed sed justo eleifend, mattis nisi nec, pulvinar
              magna. Aenean sit amet tellus quis nisi tincidunt vulputate et
              vitae elit. Etiam vehicula augue sed feugiat tincidunt. Phasellus
              tempor nisi et pharetra lobortis. Sed magna felis, rhoncus eget
              vehicula at, lobortis ac tellus. Vivamus molestie lorem tortor,
              nec ultricies tellus semper ut. Aenean ut dapibus libero, vel
              tempus massa.
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              align="center"
              sx={{ mt: 8, mb:2 }}
            >
              Experience and education
            </Typography>
            <Typography variant="subtitle1" sx={{ lineHeight: 1.4 }}>
              Donec molestie porta neque vehicula pretium. In in lectus at diam
              tempus elementum eget vel urna. Integer pretium velit ex, in
              ultrices lectus bibendum id. Fusce sit amet justo in lorem
              condimentum dapibus in nec nisi. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Morbi
              tempor non massa eu efficitur. Proin augue nisi, blandit vitae
              interdum nec, sagittis vitae quam. Donec orci neque, pharetra id
              urna vitae, rutrum sagittis nibh. Suspendisse bibendum consectetur
              tempus. Pellentesque sed rutrum erat, at auctor quam. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Proin vel nunc
              id tellus malesuada bibendum. Mauris lectus neque, mattis eu metus
              sed, sagittis ornare sem. Fusce ut tincidunt sapien, at posuere
              lacus. Cras non purus cursus, faucibus sapien eget, suscipit
              nulla. Etiam in auctor tortor, molestie congue massa.
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              align="center"
              sx={{ mt: 8, mb:2 }}
            >
              Projects
            </Typography>
            <Typography variant="subtitle1" sx={{ lineHeight: 1.4 }}>
              Maecenas vitae vestibulum nunc. Integer quis augue ac nisl rhoncus
              euismod elementum quis quam. Quisque ac est elit. Vestibulum vel
              congue nisi. Maecenas porta fringilla felis, sit amet pulvinar
              urna luctus ac. Fusce non lacus lectus. Morbi sollicitudin
              volutpat neque nec ultrices. Donec eget ligula ante. Ut eget nibh
              facilisis nibh pulvinar maximus eu in urna. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Suspendisse in facilisis augue.
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              align="center"
              sx={{ mt: 8, mb:2 }}
            >
              Resume
            </Typography>
            <Typography variant="subtitle1" sx={{ lineHeight: 1.4 }}>
              Donec placerat nisl sem, sit amet ultricies purus feugiat et.
              Quisque sagittis eu ex et consequat. Donec posuere enim mauris,
              non mollis arcu placerat eu. Vestibulum sed sollicitudin erat.
              Duis euismod hendrerit velit, in consequat orci commodo eu.
              Phasellus eu tortor dapibus, finibus ante non, eleifend sapien.
              Suspendisse blandit scelerisque ligula, ac condimentum massa
              consequat ut. Phasellus malesuada, ligula at ornare rutrum, metus
              est rhoncus diam, in elementum dolor diam vel mi. Proin vestibulum
              sem at venenatis fermentum. Vivamus et quam purus. Maecenas non
              eros orci. Quisque cursus felis eu molestie mollis.
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              align="center"
              sx={{ mt: 8, mb:2 }}
            >
              Contact
            </Typography>
            <Typography variant="subtitle1" sx={{ lineHeight: 1.4 }}>
              Quisque placerat ultricies sapien non suscipit. Mauris eros nibh,
              lacinia non mi sed, pharetra luctus dolor. Sed imperdiet facilisis
              aliquet. Donec molestie enim a tempus convallis. Nam vitae
              convallis elit, sit amet mattis metus. Vestibulum vulputate sapien
              non imperdiet pharetra. Quisque vel ligula enim. Aliquam vitae
              auctor elit. Sed dictum arcu et ornare aliquam.
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
