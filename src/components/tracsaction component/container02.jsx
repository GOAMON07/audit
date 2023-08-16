import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function container02({
  day = 11,
  M = "June",
  Y = "2023",
  defualtIncome = 10000,
  defualtOutcome = 2000,
}) {
  const result = defualtIncome - defualtOutcome;
  return (
    <Box sx={{ width: "100vw", height: "208px" }}>
      <Box
        sx={{
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            sx={{
              color: "#6D6D6D",
              fontSize: "40px",
              width: "36px",
              hight: "48px",
              lineHeight: "48.41px",
              marginLeft: "10px",
            }}
          >
            {day}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              marginLeft: "15px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                width: "68px",
                hight: "15px",
                lineHeight: "14.52px",
                color: "#6D6D6D",
              }}
            >
              LAST WEEK
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                width: "61px",
                hight: "15px",
                lineHeight: "14.52px",
                color: "#CCC9C9",
              }}
            >
              {M} {Y}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#6D6D6D",
              fontSize: "12px",
              marginTop: "10px",
              marginRight: "10px",
              alignItems: "center",
            }}
          >
            {result}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "158px",
          backgroundColor: "#ffffff",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
                marginTop: "20px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  width: "39px",
                  height: "36px",
                  marginRight: "15px",
                }}
              ></span>
              <Typography sx={{ fontSize: "12px", color: "#4E4E4E" }}>
                Food & Beverage
              </Typography>
            </Box>
          </Grid>
          <Box>
            <Typography
              sx={{
                color: "#6D6D6D",
                fontSize: "12px",
                marginTop: "30px",
                marginRight: "10px",
                alignItems: "center",
                color:"#FF8484"
              }}
            >
              {defualtOutcome}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
                marginTop: "20px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  width: "39px",
                  height: "36px",
                  marginRight: "15px",
                }}
              ></span>
              <Typography sx={{ fontSize: "12px", color: "#4E4E4E" }}>
                Food & Beverage
              </Typography>
            </Box>
          </Grid>
          <Box>
            <Typography
              sx={{
                color: "#6d6d70",
                fontSize: "12px",
                marginTop: "28px",
                marginRight: "10px",
                alignItems: "center",
                color: "#76B5FF",
              }}
            >
              {defualtIncome}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
