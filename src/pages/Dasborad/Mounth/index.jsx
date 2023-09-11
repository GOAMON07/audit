import React, { useRef, useEffect , useMemo} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chart from "chart.js/auto";
import _ from "lodash";

export default function BarChartMounth({ mounthData }) {
  const chartRef = useRef(null);

  const totalSpentThisMounth = useMemo(() => {
    if (Array.isArray(mounthData.thisMonth)) {
      const outcomeAmounts = mounthData.thisMonth
        .filter((item) => item.type === "outcome")
        .map((item) => item.amount);

      return _.sum(outcomeAmounts);
    } else {
      console.log("เกิดข้อผิดพลาด");
    }
  }, [mounthData.thisMonth]);

  const totalSpentLastMounth = useMemo(() => {
    if (Array.isArray(mounthData.lastMonth)) {
      const outcomeAmounts = mounthData.lastMonth
        .filter((item) => item.type === "outcome")
        .map((item) => item.amount);

      return _.sum(outcomeAmounts);
    } else {
      console.log("เกิดข้อผิดพลาด");
    }
  }, [mounthData.lastMonth]);

  const percentageSpendingMounth = (totalSpentThisMounth / totalSpentLastMounth) * 100;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    let chart;

    // if (chartRef.current) {
    //   if (chartRef.current.chart) {
    //     chartRef.current.chart.destroy();
    //   }
    // }

    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Last Mounth", "This Mounth"],
        datasets: [
          {
            data: [totalSpentLastMounth, totalSpentThisMounth],
            backgroundColor: ["#D9D9D9", "#FF8484"],
          },
        ],
      },
      options: {
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
      },
    });

    chartRef.current = chart;
  }, [totalSpentThisMounth,totalSpentLastMounth]);

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
                {percentageSpendingMounth}%
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
                    <canvas ref={chartRef}></canvas>
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
