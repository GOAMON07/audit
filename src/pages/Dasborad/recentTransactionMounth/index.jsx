import React, { useRef, useEffect, useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import _ from "lodash";

export default function recentTracsactionsWeek({ mounthData }) {
  const outcomeMounthData = useMemo(() => {
    const data = _.map(mounthData?.thisMonth);

    const totalOutcomeAmount = _.sumBy(data, "amount");

    const percentageData = _.map(data, (item) => ({
      ...item,
      percentage: ((item.amount / totalOutcomeAmount) * 100).toFixed(0),
    }));

    return { percentageData };
  }, [mounthData?.thisMonth]);

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div>
      {outcomeMounthData.percentageData.length > 0 ? (
        outcomeMounthData.percentageData.map((item, index) => (
          <div key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "344px",
                marginLeft: "20px",
                padding: "0px 0 0 0 ",
                marginTop: "0px",
              }}
            >
              <Grid item xs={12}>
                <Box>
                  <Avatar
                    sx={{
                      width: "39px",
                      height: "36px",
                      marginTop: "5px",
                      marginLeft: "8px",
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
                      marginLeft: "12px",
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
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{
                        color: item.type === "income" ? "#76B5FF" : "#FF8484",
                        fontFamily: "Inter",
                        fontSize: "12px",
                        marginTop: "15px",
                        marginLeft: "1px",
                      }}
                    >
                      {item.percentage}%
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </div>
        ))
      ) : (
        <Typography sx={{ fontSize: "12px", color: "#7D7D7D" }}>
          NOT RECENT TRANSACTION DATA
        </Typography>
      )}
    </div>
  );
}
