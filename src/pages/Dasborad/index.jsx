import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";

//component
import BarChartWeek from "../Dasborad/Week";
import BarChartMounth from "../Dasborad/Mounth";
import SpendingCardWeek from "./spendingWeek/index";
import SpendingCardMounth from "./spendingMounth/index";
import RecentTransactionWeek from "./recentTransactionWeek";
import RecentTransactionMounth from "./recentTransactionMounth";
import Navbar from "../Navbar/index";

//button style
const useStyles = makeStyles({
  buttonGroup: {
    borderRadius: "10px",
    marginTop: "5px",
    backgroundColor: "#F0F0F0",
    "& .MuiButton-root": {
      width: "147px",
      height: "31px",
      color: "#6D6D6D",
      fontSize: "12px",
      marginTop: "2px",
      border: "none",
      outline: "none",
    },
    "& .MuiButton-containedPrimary": {
      backgroundColor: "#ffffff",
    },
  },
});

export default function dashboard() {
  const [selectedButton, setSelectedButton] = useState("week");
  const [showBarChart, setShowBarChart] = useState(true);
  const [spending, setSpending] = useState("week");
  const [resentTransaction, setResentTransaction] = useState("week");

  const classes = useStyles();

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
    setShowBarChart(true);
    setSpending(buttonType);
    setResentTransaction(buttonType);
  };

  useEffect(() => {
    // เมื่อหน้า Dashboard โหลดครั้งแรก กำหนดค่าเริ่มต้นให้ selectedButton เป็น "week"
    setSelectedButton("week");
    // ทำการโหลดข้อมูลตามปุ่มที่ถูกเลือก (ในที่นี้คือ "week")
    setShowBarChart(true);
    setSpending("week");
    setResentTransaction("week");
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        minWidth: "375px",
        minHeight: "1085px",
        display: "flex",
        flexDirection: "column",
        
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
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "347px",
                  height: "114px",
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  marginTop: "20px",
                  overflowY: "hidden",
                }}
              >
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          marginLeft: "20px",
                          fontFamily: "Inter",
                          fontStyle: "Regular",
                          marginTop: "5px",
                        }}
                      >
                        My Wallet
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          width: "310px",
                          borderTop: "1px  #F0F0F0",
                          marginLeft: "20px",
                          height: "1px",
                          marginTop: "8px",
                        }}
                      >
                        <hr />
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Avatar
                          src="/broken-image.jpg"
                          sx={{
                            width: "60px",
                            height: "60px",
                            marginTop: "10px",
                            marginLeft: "20px",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontFamily: "inter",
                            lineHeight: "19.36px",
                            width: "61px",
                            height: "19px",
                            margin: "28px 15px 0 0 ",
                          }}
                        >
                          ฿ 9,999
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "347px",
            height: "17px",
            marginLeft: "28px",
          }}
        >
          <Box>
            <Grid container spacing={2}>
              <Grid item sx={12}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#7D7D7D",
                    fontFamily: "inter",
                  }}
                >
                  Spending report
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            width: "347px",
            height: "auto",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item sx={12}>
              <Box
                sx={{
                  width: "310px",
                  height: "42px",
                  backgroundColor: "#F0F0F0",
                  marginTop: "15px",
                  marginLeft: "18px",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ButtonGroup className={classes.buttonGroup}>
                    <Button
                      variant={selectedButton === "week" ? "contained" : "text"}
                      onClick={() => handleButtonClick("week")}
                    >
                      Week
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup className={classes.buttonGroup}>
                    <Button
                      variant={
                        selectedButton === "mounth" ? "contained" : "text"
                      }
                      onClick={() => handleButtonClick("mounth")}
                    >
                      Mounth
                    </Button>
                  </ButtonGroup>
                </Box>
              </Box>
            </Grid>
          </Grid>
          {showBarChart && selectedButton === "week" ? (
            <BarChartWeek />
          ) : (
            <BarChartMounth />
          )}
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#7D7D7D",
                    marginLeft: "15px",
                    fontFamily: "inter",
                  }}
                >
                  Top spending
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "347px",
                    height: "120px",
                    overflowX: "hidden",
                    overflowY: "scroll",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                >
                  {spending && showBarChart && selectedButton === "week" ? (
                    <SpendingCardWeek />
                  ) : (
                    <SpendingCardMounth />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            width: "347px",
            height: "17px",
            marginLeft: "28px",
          }}
        >
          <Box>
            <Grid container spacing={2}>
              <Grid item sx={12}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#7D7D7D",
                    fontFamily: "inter",
                  }}
                >
                  Recent transactions
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "344px",
                  height: "188px",
                  overflowX: "hidden",
                  overflowY: "scroll",
                  borderRadius: "10px",
                  marginTop: "10px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                {resentTransaction === "week" ? (
                  <RecentTransactionWeek />
                ) : (
                  <RecentTransactionMounth />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Navbar />
      </Box>
    </Box>
  );
}
