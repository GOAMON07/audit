import React, { useContext, useState, createContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

//component
import Card from "../userWallet/compnent/card/index";

export const DataContext = createContext();

export default function user() {
  let navigate = useNavigate();
  const walletMock = [
    { walltName: "tid", idWallet: "1", detail: "เป๋าทิตเองไง",money:"฿ 9999" },
    {
      walltName: "tid2",
      idWallet: "2",
      detail: "เป๋าทิต2เองไงasdasdasdasdasdasdasdasd",
    },
    { walltName: "tid", idWallet: "1", detail: "เป๋าทิตเองไง" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                sx={{
                  backgroundColor: "#52AA5E",
                  borderColor: "#FFF",
                  padding: "16px",
                  "&:hover": {
                    backgroundColor: "#52AA5E",
                  },
                  marginTop: "10px",
                  marginRight:"15px"
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
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                
              }}
              onClick={() => {
                navigate("/Dasborad");
              }}
            >
              {walletMock.map((item) => {
                return <Card createWallet={item} />;
              })}
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
  );
}
