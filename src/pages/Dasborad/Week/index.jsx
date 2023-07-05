import React, { useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function Index() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    let chart;

    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    }

    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Last Week", "This Week"],
        datasets: [
          {
            data: [10, 150],
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
  }, []);

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
              ฿ 150
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
                  color:"#7D7D7D"
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
                0%
              </Typography>
            </Box>
            <Box >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width:"245px"
                      ,height:"230px",
                      marginLeft:"50px"
                    }}
                  >
                    <canvas  ref={chartRef} ></canvas>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box>
        
      </Box>
    </Box>
  );
}
