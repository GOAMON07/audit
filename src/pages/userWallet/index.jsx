import React, { useCallback, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Loading from "../../Loading";

//component
import Card from "../userWallet/compnent/card/index";

export default function user() {
  let navigate = useNavigate();
  const [walletData, setWalletData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://us-central1-audit-396115.cloudfunctions.net/expressApi/api/wallet?userId=64dd0397eaebfbb752bcb1c7",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setWalletData(data);
      } else {
        console.log("ไม่สามารถดึงข้อมูลได้");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "none",
      }}
    >
      <Box>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              <Button
                sx={{
                  width: "59px",
                  height: "29px",
                  backgroundColor: "#52AA5E",
                  borderColor: "#FFF",
                  padding: "16px",
                  "&:hover": {
                    backgroundColor: "#52AA5E",
                  },

                  marginRight: "15px",
                }}
                onClick={() => {
                  navigate("/AddWallet");
                }}
              >
                <AddIcon
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "38px",
                    color: "#FFFCFC",
                  }}
                />
              </Button>
            </Box>
          </Grid>

          {isLoading ? (
            <Loading />
          ) : (
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {walletData.map((item) => {
                  return <Card createWallet={item} />;
                })}
              </Box>
            </Grid>
          )}

          <Grid
            item
            xs={12}
            sx={{
              position: "fixed",
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
  );
}
