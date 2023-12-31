import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, Grid } from "@mui/material";
import { Link, useLocation, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
  const location = useLocation();
  const [selectedButton, setSelectedButton] = useState(location.pathname);
// console.log(location);
  const handleButtonClick = (path) => {
    setSelectedButton(path);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Toolbar>
          <Grid item xs={12}>
            <Button
              component={NavLink}
              to="/Dasborad"
              variant="text"
              onClick={() => handleButtonClick("/Dasborad")}
              sx={{
                color: selectedButton === "/Dasborad" ? "#4E4E4E" : "#D9D9D9",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HomeIcon /> Home
              </Box>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              component={NavLink}
              to="/Transcription"
              variant="text"
              onClick={() => handleButtonClick("/Transcription")}
              sx={{
                color: selectedButton === "/Transcription" ? "#4E4E4E" : "#D9D9D9",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HistoryIcon /> Transactions
              </Box>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              component={NavLink}
              to="/AddTranscription"
              variant="text"
              onClick={() => handleButtonClick("/AddTranscription")}
              sx={{
                color: selectedButton === "/AddTranscription" ? "#4E4E4E" : "#D9D9D9",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AddCircleIcon
                  sx={{ width: "40px", height: "56px", color: "#52AA5E" }}
                />
              </Box>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              component={NavLink}
              to="/UserWallet"
              variant="text"
              onClick={() => handleButtonClick("/UserWallet")}
              sx={{
                color: selectedButton === "/UserWallet" ? "#4E4E4E" : "#D9D9D9",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocalAtmIcon /> Switch-Wallet
              </Box>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              component={NavLink}
              to="/Account"
              variant="text"
              onClick={() => handleButtonClick("/Account")}
              sx={{
                color: selectedButton === "/Account" ? "#4E4E4E" : "#D9D9D9",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PersonIcon /> Account
              </Box>
            </Button>
          </Grid>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
