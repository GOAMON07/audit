import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: "#F5F5F5" }}>
            <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => {
                    navigate("/Dasborad");
                  }}
                >
                  <CloseIcon sx={{ marginLeft: "20px", color: "#7A7A7A" }} />
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
                    textTransform: "none",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "347px",
          height: "284px",
          backgroundColor: "#FFFFFF",
          marginTop: "75px",
          marginLeft: "14px",
          borderRadius: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box>
              <Typography
                sx={{
                  width: "700",
                  fontFamily: "inter",
                  lineHeight: "19.36px",
                  fontSize: "16px",
                  color: "#76B5FF",
                  marginLeft: "30px",
                  marginTop: "15px",
                }}
              >
                ฿ 9,999
              </Typography>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                    marginTop: "20px",
                  }}
                  onClick={() => {
                    navigate("/SelectCategory")
                    handleSelectCategory("catagory")
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
                    variant="body1"
                    component="span"
                    sx={{
                      fontFamily: "inter",
                      fontSize: "16px",
                      color: "#7D7D7D",
                    }}
                  >
                    {selectedCategory ? selectedCategory : "Select category"}
                  </Typography>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
