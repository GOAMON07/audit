import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function AddWallet() {
  const [walletName, setWalletName] = useState("");
  const [detail, setDetail] = useState("");
  let navigate = useNavigate();

  creatWallet = () =>{

  }
  
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        minWidth:'100vw',
        minHeight:'100vh'
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent:'center'
          ,alignItems:'center'
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ backgroundColor: "#F5F5F5" }}>
                <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
                  <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="bl"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      onClick={() => {
                        navigate("/UserWallet");
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography
                      variant="h1"
                      component="div"
                      sx={{
                        flexGrow: 1,
                        fontSize: "16px",
                        fontStyle: "Regular",
                        fontFamily: "inter",
                        color: "black",
                      }}
                    >
                      Add Wallet
                    </Typography>
                    <Button
                      variant="h1"
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        fontStyle: "Regular",
                        fontFamily: "inter",
                        textTransform: "none",
                      }}
                    >
                      save
                    </Button>
                  </Toolbar>
                </AppBar>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          xs={12}
          sx={{
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            minHeight: "70vh",
          }}
        >
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "347px",
                    height: "284px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Wallet name"
                        size="small"
                        sx={{
                          fontSize: "16px",
                          width: "289px",
                          height: "41px",
                          marginLeft: "30px",
                          marginTop: "25px",
                        }}
                        InputLabelProps={{
                          sx: { color: "#D9D9D9" },
                        }}
                        value={walletName}
                        onChange={(e) => setWalletName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Detail"
                        size="small"
                        multiline
                        rows={4}
                        sx={{
                          width: "289px",
                          height: "122px",
                          marginTop: "15px",
                          marginLeft: "30px",
                        }}
                        InputLabelProps={{
                          sx: { color: "#D9D9D9" },
                        }}
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",

                      fontStyle: "Regular",
                      color: "#D9D9D9",
                    }}
                  >
                    V.11062023-01
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
