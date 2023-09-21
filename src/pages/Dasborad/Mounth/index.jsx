import React, { useMemo } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Bar } from "react-chartjs-2";
import _ from "lodash";
import { Chart, registerables} from 'chart.js/auto';

Chart.register(...registerables);

export default function BarChartMounth({ mounthData }) {
  const totalSpentThisMounth = useMemo(() => {
    const outcomeThisMounthAmounts =
      mounthData &&
      mounthData?.thisMonth
        ?.filter((item) => item.type === "outcome")
        ?.map((item) => item.amount);
    return _.sum(outcomeThisMounthAmounts ?? 0) ?? 0;
  }, [mounthData?.thisMonth]);

  const totalSpentLastMounth = useMemo(() => {
    const outcomeLastMounthAmounts =
      mounthData &&
      mounthData?.thisMonth
        ?.filter((item) => item.type === "outcome")
        ?.map((item) => item.amount);

    return _.sum(outcomeLastMounthAmounts ?? 0) ?? 0;
  }, [mounthData?.thisMonth]);

  const percentageSpendingMounth = (
    (totalSpentThisMounth / totalSpentLastMounth) *
    100
  ).toFixed(0);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                width: "auto",
                height: "19px",
                marginLeft: "15px",
                marginTop: "20px",
                color: "#555050",
                fontSize: "16px",
                fontFamily: "inter",
                lineHeight: " 19.36px",
              }}
            >
              ฿ {totalSpentThisMounth}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <Grid item xs={12}>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  marginLeft: "15px",
                  marginTop: "5px",
                  fontFamily: "inter",
                  color: "#7D7D7D",
                }}
              >
                Total spent this mounth
              </Typography>
              <Typography
                sx={{
                  marginLeft: "20px",
                  marginTop: "5px",
                  color: "#FFCE21",
                  fontFamily: "inter",
                }}
              >
                {isNaN(percentageSpendingMounth) ? 0 : percentageSpendingMounth} %
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "245px",
                      height: "230px",
                      marginLeft: "50px",
                    }}
                  >
                    <Bar
                      data={{
                        labels: ["Last Mounth", "This Mounth"],
                        datasets: [
                          {
                            data: [totalSpentLastMounth, totalSpentThisMounth],
                            backgroundColor: ["#D9D9D9", "#FF8484"],
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            type: "linear",
                            position: "right",
                            display: true,
                            grid: {
                              display: false, // ปิดการแสดงเส้นกริดในแกน y
                            },
                            ticks: {
                              display: true,
                            },
                          },
                        },
                        plugins: {
                          legend: {
                            display: false, // ปิดการแสดงตัวหมาย
                          },
                          datalabels: {
                            display: false, // ปิดการแสดงตัวหมายในแผนก
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Box>
     </Box>
  );
}
