import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import  { useMemo } from "react";
import _ from "lodash";
import { Bar } from "react-chartjs-2";


export default function BarChartWeek({ weekData }) {


  const totalSpentThisWeek = useMemo(() => {
    const outcomeAmounts =
      weekData &&
      weekData?.thisWeek
        ?.filter((item) => item.type === "outcome")
        ?.map((item) => item.amount);
    return _.sum(outcomeAmounts ?? 0) ?? 0;
    
  }, [weekData?.thisWeek]);

  const totalSpentLastWeek = useMemo(() => {
    const outcomeLastWeekAmounts =
      weekData &&
      weekData?.lastWeek
        ?.filter((item) => item.type === "outcome")
        ?.map((item) => item.amount);

    return _.sum(outcomeLastWeekAmounts ?? 0) ?? 0;

  }, [weekData?.lastWeek]);

  const percentageSpendingWeek = (
    (totalSpentThisWeek / totalSpentLastWeek) *
    100
  ).toFixed(2) ;



  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                width: "44px",
                height: "19px",
                marginLeft: "15px",
                marginTop: "20px",
                color: "#555050",
                fontSize: "16px",
                fontFamily: "inter",
                lineHeight: " 19.36px",
              }}
            >
              ฿  {totalSpentThisWeek}
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
                Total spent this week
              </Typography>
              <Typography
                sx={{
                  marginLeft: "20px",
                  marginTop: "5px",
                  color: "#FFCE21",
                  fontFamily: "inter",
                }}
              >
                { isNaN(percentageSpendingWeek) ? 0 : percentageSpendingWeek} %
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
                        labels: ["Last Week", "This Week"],
                        datasets: [
                          {
                            data: [totalSpentLastWeek, totalSpentThisWeek],
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
      <Box></Box>
    </Box>
  );
}
