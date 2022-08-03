import React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import {Auth} from '../Context/api';
import { useContext } from 'react';
const theme = createTheme();

const Navbar = () => {
  const navigator = useNavigate();
  const handlelogin = () => {
    navigator("/login");
  };
  const handlelogout = async () => {
    await signOut(auth);
    alert("User logout");
    navigator("/");
  };
  const handle = () => {
    navigator("/");
  };

  const {user} = useContext(Auth);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="relative">
          <Toolbar>
            <Typography
              variant="h5"
              color="inherit"
              noWrap
              onClick={() => {
                handle();
              }}
            >
              OpenStreetmap
            </Typography>
            {!user ? (
              <Button
                sx={{ backgroundColor: "green", color: "white" }}
                onClick={() => {
                  handlelogin();
                }}
                variant="h5"
              >
                Login
              </Button>
            ) 
            : (
              <Button
                sx={{ backgroundColor: "green", color: "white" }}
                onClick={() => {
                  handlelogout();
                }}
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Navbar;
