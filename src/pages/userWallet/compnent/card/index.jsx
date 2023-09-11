import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function BasicCard({ createWallet }) {
  let navigate = useNavigate();

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

  return (
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
            onClick={() => {
              handleWalletClick(createWallet.walletId);
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
              <IconButton sx={{ mr: 1 }}>
                <CloseIcon sx={{ color: "-moz-initial" }} />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
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
  );
}
