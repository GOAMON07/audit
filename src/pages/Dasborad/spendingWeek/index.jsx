import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function index() {
  let spendingMock = [
    { spend: "Food & Beverage", moneySpend: "฿ 150", totalSpend: "66%" },
    { spend: "Rental", moneySpend: "฿ 50", totalSpend: "33%" },
  ];
  return spendingMock.map((item) => (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Grid item xs={12}>
        <Box>
          <Avatar
            sx={{ width: "39px", height: "36px", marginTop: "7px" }}
          ></Avatar>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Typography
            sx={{
              width: "230px",
              height: "30px",
              color: "#4E4E4E",
              fontFamily: "Inter",
              fontSize:"12px",
              marginLeft: "10px",
            }}
          >
            {item.spend}
          </Typography>
          <Typography
            sx={{ color: "#ABABAB", fontFamily: "Inter", marginLeft: "10px",fontSize:"12px", }}
          >
            {item.moneySpend}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "#FF8484", fontFamily: "Inter",fontSize:"12px", }}>
              {item.totalSpend}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  ));
}
