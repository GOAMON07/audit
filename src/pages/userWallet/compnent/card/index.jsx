import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../../../Loading/index";
import dayjs from "dayjs";

export default function BasicCard({ createWallet, setReload }) {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleWalletClick = (walletId) => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};

    const newData = {
      idWallet: walletId,
    };

    const updateDataLocalStroage = {
      ...userProfile,
      ...newData,
    };

    localStorage.setItem("userProfile", JSON.stringify(updateDataLocalStroage));
    navigate("/Dasborad");
  };

  // useEffect(() => {
  //   if (idWallet) {
  //     const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};

  //     const newData = {
  //       idWallet: createWallet.walletId,
  //     };

  //     const updateDataLocalStroage = {
  //       ...userProfile,
  //       ...newData,
  //     };

  //     localStorage.setItem(
  //       "userProfile",
  //       JSON.stringify(updateDataLocalStroage)
  //     );
  //     navigate("/Dasborad");

  //   }
  // }, [idWallet]);

  const deleted = async (walletId) => {
    setIsLoading(true);
    try {
      const response = await axios.put(
        `https://us-central1-audit-396115.cloudfunctions.net/expressApi/api/wallet?walletId=${walletId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setReload(dayjs().unix());

        Swal.fire({
          icon: "success",
          title: "ข้อความ.",
          text: "ลบสำเร็จ",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "something wrong ",
        });
      }
    } catch (error) {
      console.error("Error deleting wallet:", error);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "something wrong ",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Loading loading={isLoading} />
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "347px",
                height: "auto",
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                marginBottom: "20px",
                marginTop: "20px",
                overflow: "hidden",
                ":hover": {
                  backgroundColor: "#ffffff",
                  border: "1px solid #7d82e3",
                  cursor: "pointer",
                },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        marginLeft: "10px",
                        fontFamily: "Inter",
                        fontStyle: "Regular",
                      }}
                    >
                      Wallet
                    </Typography>
                  </Grid>
                </Grid>
                <IconButton
                  sx={{ mr: 1 }}
                  onClick={() => deleted(createWallet.walletId)}
                >
                  <CloseIcon sx={{ color: "-moz-initial" }} />
                </IconButton>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start" }}
                onClick={() => {
                  handleWalletClick(createWallet.walletId);
                }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Box>
                      <Avatar sx={{ marginLeft: "10px" }}>H</Avatar>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Box sx={{ width: "150px", marginRight: "80px" }}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          marginLeft: "10px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontFamily: "Inter",
                          fontStyle: "Regular",
                        }}
                      >
                        {createWallet.walletName}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ width: "150px", marginRight: "80px" }}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          marginLeft: "10px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          color: "#7D7D7D",
                          fontFamily: "Inter",
                          fontStyle: "Regular",
                        }}
                      >
                        {createWallet.detail}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
