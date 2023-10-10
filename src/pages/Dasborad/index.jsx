import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import { useCallback, useEffect, useState } from "react";

//API
import {
  getAmountAPI,
  getTransactionAPI,
} from "../../module/dashbord/dashbordCrud";
import { getDataWalletAPI } from "../../module/wallet/walletCrude";

//component
import BarChartMounth from "../Dasborad/Mounth";
import BarChartWeek from "../Dasborad/Week";
import Navbar from "../Navbar/index";
import RecentTransactionMounth from "./recentTransactionMounth";
import RecentTransactionWeek from "./recentTransactionWeek";
import SpendingCardMounth from "./spendingMounth/index";
import SpendingCardWeek from "./spendingWeek/index";
import Loading from "../../Loading";

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
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [dataWallet, setDataWallet] = useState("");
  const dataFromLocalStroage = localStorage.getItem("userProfile");
  const walletId = JSON.parse(dataFromLocalStroage)?.idWallet ?? "0";

  const classes = useStyles();

  const getAmountData = useCallback(async () => {
    setIsLoading(true);
    try {
      const responseAmount = await getAmountAPI();

      if (responseAmount.status === "success") {
        setTotalAmount(responseAmount.data);
      } else {
        console.log("ไม่สามารถดึงข้อมูลได้");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getTransaction = useCallback(async (dayType) => {
    setIsLoading(true);
    try {
      const response = await getTransactionAPI(dayType);

      if (response.status === "success") {
        setTransactions(response.data);
      } else {
        console.log("ไม่สามารถดึงข้อมูลได้");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getWalletData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getDataWalletAPI();
      if (res) {
        setDataWallet(res);
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getAmountData();
    getTransaction(selectedButton);
    getWalletData();
  }, [getAmountData, getTransaction]);

  return (
    <div>
      <Loading loading={isLoading} />
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          height: "1058px",
          width: "auto",
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
                          My Wallet : {dataWallet.walletName}
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
                              width: "auto",
                              height: "19px",
                              margin: "28px 15px 0 0 ",
                            }}
                          >
                            ฿ {totalAmount?.totalAmount}
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
                        variant={
                          selectedButton === "week" ? "contained" : "text"
                        }
                        onClick={() => {
                          setSelectedButton("week");
                          getTransaction("week");
                        }}
                      >
                        Week
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup className={classes.buttonGroup}>
                      <Button
                        variant={
                          selectedButton === "month" ? "contained" : "text"
                        }
                        onClick={() => {
                          setSelectedButton("month");
                          getTransaction("month");
                        }}
                      >
                        Mounth
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {selectedButton === "week" ? (
              <BarChartWeek weekData={transactions} />
            ) : (
              <BarChartMounth mounthData={transactions} />
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
                    <div>
                      {selectedButton === "week" ? (
                        <SpendingCardWeek weekData={transactions} />
                      ) : (
                        <SpendingCardMounth mounthData={transactions} />
                      )}
                    </div>
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
                    marginTop: "15px",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <div>
                    {selectedButton === "week" ? (
                      <RecentTransactionWeek weekData={transactions} />
                    ) : (
                      <RecentTransactionMounth mounthData={transactions} />
                    )}
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Navbar />
        </Box>
      </Box>
    </div>
  );
}
