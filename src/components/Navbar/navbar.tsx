import * as React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Button,
} from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ 
        bgcolor: "rgba(15, 15, 15, 0.79)",
        backdropFilter: 'blur(1.5px)'
       }}>
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;