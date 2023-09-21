import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import _ from "lodash";

export default function SpendingMounth({ mounthData }) {
  const outcomeData = useMemo(() => {
    const outcomeItems = _.filter(mounthData?.thisMonth, { type: "outcome" });

    const sortedOutcomeItems = _.orderBy(outcomeItems, ["amount"], ["desc"]);

    const topTwoOutcomeItems = _.take(sortedOutcomeItems, 2);

    const totalOutcomeAmount = _.sumBy(outcomeItems, "amount");

    const percentageData = _.map(outcomeItems, (item) => ({
      ...item,
      percentage: ((item.amount / totalOutcomeAmount) * 100).toFixed(0),
    }));

    const sortedTwoPercentageDataItems = _.orderBy(
      percentageData,
      ["percentage"],
      ["desc"]
    );
    const TopTwoOutcomeAndPercentageDataItems = _.take(
      sortedTwoPercentageDataItems,
      2
    );

    return {
      TopTwoOutcomeAndPercentageDataItems,
    };
  }, [mounthData?.thisMonth]);
  return (
    <div>
      {outcomeData?.TopTwoOutcomeAndPercentageDataItems?.map((item, index) => (
        <div key={index}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Grid item xs={12}>
              <Box>
                <Avatar
                  sx={{ width: "39px", height: "36px", marginTop: "3px" }}
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
                    marginLeft: "10px",
                    fontSize: "12px",
                  }}
                >
                  {item.category}
                </Typography>
                <Typography
                  sx={{
                    color: "#ABABAB",
                    fontFamily: "Inter",
                    marginLeft: "10px",
                    fontSize: "12px",
                  }}
                >
                  {item.amount}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{
                      color: "#FF8484",
                      fontFamily: "Inter",
                      fontSize: "12px",
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
