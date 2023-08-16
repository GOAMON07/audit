import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function container01({DefualtInflow=10000,DefualtOutflow=2000}) {
  const result = DefualtInflow-DefualtOutflow;
  return (
    <Box
      sx={{
        width: "100vw",
        height: "137px",
        backgroundColor: "#e0dede",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item xs={12}>
          <Typography sx={{ color: "#6D6D6D", fontSize: "12px" }}>
            Inflow
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ color: "#76B5FF", fontSize: "12px" }}>
            {DefualtInflow}
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item xs={12}>
          <Typography sx={{ color: "#6D6D6D", fontSize: "12px" }}>
            Outflow
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ color: "#FF8484", fontSize: "12px" }}>
            {DefualtOutflow}
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Grid item xs={12}>
          <Divider sx={{ width: "127px" }} />
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Grid item xs={12}>
          <Typography sx={{ color: "#6D6D6D", fontSize: "12px" }}>
           {result}
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
}
