import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import WestIcon from "@mui/icons-material/West";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../";

export default function Category() {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const navigate = useNavigate();

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    navigate("/AddTranscription");
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
                    navigate("/AddTranscription");
                  }}
                >
                  <WestIcon sx={{ marginLeft: "20px", color: "#7A7A7A" }} />
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
                  Type category name
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Typography
          sx={{
            color: "#7D7D7D",
            marginTop: "76px",
            marginLeft: "14px",
            fontSize: "16px",
            fontFamily: "inter",
          }}
        >
          Required Expense
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "347px",
            height: "235px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            borderRadius: "15px",
            marginTop: "15px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                    marginTop: "10px",
                  }}
                  onClick={() => {
                    handleSelectCategory("Food");
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
                      fontSize: "16px",
                      color: "#7D7D7D",
                    }}
                  >
                    Food
                    
                  </Typography>
                </Box>
              </Box>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    width: "347px",
                    height: "1px",
                    marginTop: "15px",
                  }}
                >
                  <hr style={{ border: " 1px solid #F0F0F0" }} />
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                    marginTop: "5px",
                  }}
                  onClick={() => {
                    handleSelectCategory("Transportation");
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
                      fontSize: "16px",
                      color: "#7D7D7D",
                    }}
                    
                  >
                   Transportation
                  </Typography>
                </Box>
              </Box>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    width: "347px",
                    height: "1px",
                    marginTop: "15px",
                  }}
                >
                  <hr style={{ border: " 1px solid #F0F0F0" }} />
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                    marginTop: "5px",
                  }}
                  onClick={() => {
                    handleSelectCategory("Rentals");
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
                      fontSize: "16px",
                      color: "#7D7D7D",
                    }}
                  >
                    Rentals
                  </Typography>
                </Box>
              </Box>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    width: "347px",
                    height: "1px",
                    marginTop: "15px",
                  }}
                >
                  <hr style={{ border: " 1px solid #F0F0F0" }} />
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                  }}
                  onClick={() => {
                    handleSelectCategory("Other");
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
                      fontSize: "16px",
                      color: "#7D7D7D",
                    }}
                  >
                    Other
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#7D7D7D",
            marginLeft: "14px",
            fontSize: "16px",
            fontFamily: "inter",
            marginTop: "15px",
          }}
        >
          Income
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "347px",
            height: "116px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            borderRadius: "15px",
            marginTop: "15px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                    marginTop: "15px",
                  }}
                  onClick={() => {
                    handleSelectCategory("Salary");
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
                      fontSize: "16px",
                      color: "#7D7D7D",
                    }}
                  >
                   Salary
                  </Typography>
                </Box>
              </Box>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    width: "347px",
                    height: "1px",
                    marginTop: "15px",
                  }}
                >
                  <hr style={{ border: " 1px solid #F0F0F0" }} />
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                    marginTop: "3px",
                  }}
                  onClick={() => {
                    handleSelectCategory("Other Income");
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
                      fontSize: "16px",
                      color: "#7D7D7D",
                    }}
                  >
                   Other Income
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
