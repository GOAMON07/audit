import React, { useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import _ from "lodash";

export default function container01({ transactionData }) {
  const inFlowData = useMemo(() => {
    const incomeData =
      transactionData &&
      transactionData?.data
        ?.filter((item) => item.type === "income")
        ?.map((item) => item.amount);
    return _.sum(incomeData ?? 0) ?? 0;
  }, [transactionData]);

  const outFlowData = useMemo(() => {
    const outcomeData =
      transactionData &&
      transactionData?.data
        ?.filter((item) => item.type === "outcome")
        ?.map((item) => item.amount);
    return _.sum(outcomeData ?? 0) ?? 0;
  }, [transactionData]);

  const result = inFlowData - outFlowData;

  const formatTotaloutFlowData = Number(outFlowData).toLocaleString("en-US");

  const formatTotalinFlowData = Number(inFlowData).toLocaleString("en-US");

  const formatresult = Number(result).toLocaleString("en-US");
  // useEffect(() => {
  //  console.log("aaaaa",transactionData);
  // }, [transactionData])
  
  return (
    <Box
      sx={{
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item xs={12}>
          <Typography
            sx={{ color: "#6D6D6D", fontSize: "14px", marginLeft: "10px" }}
          >
            Inflow
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ color: "#76B5FF", fontSize: "14px", marginRight: "10px" }}
          >
            {formatTotalinFlowData}
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item xs={12}>
          <Typography
            sx={{ color: "#6D6D6D", fontSize: "14px", marginLeft: "10px" }}
          >
            Outflow
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ color: "#FF8484", fontSize: "14px", marginRight: "10px" }}
          >
            {formatTotaloutFlowData}
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
          <Typography
            sx={{ color: "#6D6D6D", fontSize: "14px", marginRight: "10px" }}
          >
            {formatresult}
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
}
