import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";

export default function index() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("home");
  const handleButtonClick = (path) => {
    setSelectedButton(path);
    navigate(path);
  };
  return (
    <Box
      className="font-loader"
      sx={{
        backgroundColor: "#F5F5F5",
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={2}>
        <Grid item sx={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "40px", color: "#52AA5E", marginTop: "15px" }}
            >
              TISA
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "347px",
            height: "114px",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            marginTop: "20px",
            display: "flex",
          }}
        >
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    marginLeft: "12px",
                    fontFamily: "Inter",
                    fontStyle: "Regular",
                    marginTop: "6px",
                  }}
                >
                  Account
                </Typography>
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Box>
                    <Avatar
                      sx={{
                        marginLeft: "15px",
                        marginTop: "12px",
                        width: "55px",
                        height: "51px",
                      }}
                    ></Avatar>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Box sx={{ marginLeft: "50px" }}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        marginLeft: "10px",
                      }}
                    >
                      Suntiver6
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ width: "150px", marginRight: "80px" }}>
                    <Typography
                      sx={{
                        width: "143px",
                        fontSize: "16px",
                        marginLeft: "10px",
                        color: "#7D7D7D",
                      }}
                    >
                      suntiver6@gmail.com
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width:"100vw"
          
        }}
      >
        <Box sx={{marginRight:"150px"}}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
                marginTop: "35px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  width: "26px",
                  height: "25px",
                  marginRight: "15px",
                }}
              ></span>
              <Typography
                sx={{
                  fontFamily: "inter",
                  fontSize: "15px",
                  color: "#4E4E4E",
                }}
              >
                Switch wallets
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
                marginTop: "35px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  width: "26px",
                  height: "25px",
                  marginRight: "15px",
                }}
              ></span>
              <Typography
                sx={{
                  fontFamily: "inter",
                  fontSize: "15px",
                  color: "#4E4E4E",
                }}
              >
                Help & Support
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
                marginTop: "35px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  width: "26px",
                  height: "25px",
                  marginRight: "15px",
                }}
              ></span>
              <Typography
                sx={{
                  fontFamily: "inter",
                  fontSize: "15px",
                  color: "#4E4E4E",
                }}
              >
                Settings
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
                marginTop: "35px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  width: "26px",
                  height: "25px",
                  marginRight: "15px",
                }}
              ></span>
              <Typography
                sx={{
                  fontFamily: "inter",
                  fontSize: "15px",
                  color: "#4E4E4E",
                }}
              >
                Abount
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
                marginTop: "35px",
              }}
              onClick={() => {
                navigate("/");
                
              }}
            >
              <span
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  width: "26px",
                  height: "25px",
                  marginRight: "15px",
                }}
              ></span>
              <Typography
                sx={{
                  fontFamily: "inter",
                  fontSize: "15px",
                  color: "#4E4E4E",
                }}
                
              >
                Logout
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Box>

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
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Toolbar>
            <Grid item xs={12}>
              <Button
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
                variant="text"
                onClick={() => handleButtonClick("/Transcription")}
                sx={{
                  color:
                    selectedButton === "/Transcription" ? "#4E4E4E" : "#D9D9D9",
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
                variant="text"
                onClick={() => handleButtonClick("/AddTranscription")}
                sx={{
                  color:
                    selectedButton === "/AddTranscription"
                      ? "#4E4E4E"
                      : "#D9D9D9",
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
                variant="text"
                onClick={() => handleButtonClick("budgets")}
                sx={{
                  color: selectedButton === "budgets" ? "#4E4E4E" : "#D9D9D9",
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
                  <LocalAtmIcon /> Budgets
                </Box>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
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
    </Box>
  );
}
