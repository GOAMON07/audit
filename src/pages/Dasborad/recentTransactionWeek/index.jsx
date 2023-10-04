import React, { useRef, useEffect, useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import _ from "lodash";

export default function recentTracsactionsWeek({ weekData }) {
  const outcomeWeekData = useMemo(() => {
    const data = _.map(weekData?.thisWeek);

    const totalOutcomeAmount = _.sumBy(data, "amount");

    const percentageData = _.map(data, (item) => ({
      ...item,
      percentage: ((item.amount / totalOutcomeAmount) * 100).toFixed(0),
    }));

    return { percentageData };
  }, [weekData?.thisWeek]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      {outcomeWeekData?.percentageData?.map((item, index) => (
        <div key={index}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "344px",
            }}
          >
            <Grid item xs={12}>
              <Box>
                <Avatar
                  sx={{
                    width: "39px",
                    height: "36px",
                    marginTop: "12px",
                    marginLeft: "14px",
                  }}
                ></Avatar>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography
                  sx={{
                    width: "240px",
                    height: "30px",
                    color: "#4E4E4E",
                    fontFamily: "Inter",
                    fontSize: "12px",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  {item.category}
                </Typography>
                <Typography
                  sx={{
                    color: "#ABABAB",
                    fontFamily: "Inter",
                    fontSize: "12px",
                    marginLeft: "10px",
                  }}
                >
                  {formatDate(item.transactionDate)}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{
                      color: item.type === "income" ? "#76B5FF" : "#FF8484",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      marginTop: "12px",
                    }}
                  >
                    {item.percentage}%
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Box>
        </div>
      ))}
    </div>
  );
}
