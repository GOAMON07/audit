import React, { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import Loading from "../../Loading";
import Navbar from "../Navbar/index";

export default function index() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("home");
  const [acountData, setAcountData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const getAcountData = useCallback(async () => {
    setIsLoading(true);
    try {
      const responseAcount = await axios.get(
        "https://us-central1-audit-396115.cloudfunctions.net/expressApi/api/auth/account?userId=64dd0397eaebfbb752bcb1c7",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (responseAcount.status === 200) {
        const data = responseAcount.data.data;

        setAcountData(data);
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
    } finally {
      setIsLoading(false);
    }
  });
  useEffect(() => {
    getAcountData();
  }, []);

  const handleLogout = () => {
    // Clear user data and token from local storage
    localStorage.removeItem("userProfile");
    localStorage.removeItem("token");
    // Reload the page
    window.location.reload();
  };

  const handleButtonClick = (path) => {
    setSelectedButton(path);
    navigate(path);
  };
  return (
    <div>
      <Loading loading={isLoading} />
      <Box
        className="font-loader"
        sx={{
          backgroundColor: "#F5F5F5",
          width: "100vw",
          height: "100vh",
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
                        {acountData.username}
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
                        {acountData.emial}
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
            width: "100vw",
          }}
        >
          <Box sx={{ marginRight: "150px" }}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "15px",
                  marginTop: "35px",
                  cursor: "pointer",
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
                  cursor: "pointer",
                }}
                onClick={handleLogout}
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

        <Navbar />
      </Box>
    </div>
  );
}
