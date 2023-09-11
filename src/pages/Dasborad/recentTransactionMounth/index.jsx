import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function index() {
  let spendingMock = [
    {
      spend: "Food & Beverage",
      moneySpend: "50",
      totalSpend: "66%",
      date: " 11 jube 2023",
    },
    {
      spend: "Food & Beverage",
      moneySpend: "50",
      totalSpend: "33%",
      date: " 11 jube 2023",
    },
    {
      spend: "Income",
      moneySpend: "100",
      totalSpend: "33%",
      date: " 11 jube 2023",
    },
    
  ];
  return spendingMock.map((item) => (
    <Box sx={{ display: "flex", flexDirection: "row" ,width:"344px",marginLeft:"20px" }}>
      <Grid item xs={12}>
        <Box>
          <Avatar
            sx={{
              width: "39px",
              height: "36px",
              marginTop: "5px",
              marginLeft:"3px"
            }}
          ></Avatar>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Typography
            sx={{
              width: "240px",
              height: "35px",
              color: "#4E4E4E",
              fontFamily: "Inter",
              fontSize:"12px",
            }}
          >
            {item.spend}
          </Typography>
          <Typography sx={{ color: "#ABABAB", fontFamily: "Inter",fontSize:"12px", }}>
            {item.date}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: item.spend === "Income" ? "#76B5FF" : "#FF8484",
                fontFamily: "Inter",fontSize:"12px",
              }}
            >
              {item.moneySpend}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  ));
}
