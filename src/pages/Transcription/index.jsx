import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Navbar from "../Navbar";
import React,{useMemo, useState,useEffect, useCallback} from 'react'
import dayjs from 'dayjs'

import Typography from "@mui/material/Typography";
// import Slide from "./slide";

import SwiperCard from "../../components/swiperCard";

export default function index() {

  const year = 2023; 

  const [weeks, setWeeks] = useState([]);

 
  

  const generateWeeks = useCallback(() => {

    let currentMonth = dayjs()
    let date = dayjs().year(year).startOf('year').day(0); // Set to the first Sunday
    const generatedWeeks = [];
    let i =0

    while (date.year() ===  dayjs().year() && date <= currentMonth) {
      const startDate = date.startOf('day');
      const endDate = date.add(6, 'day').endOf('day');

      generatedWeeks.push({
        id:i,
        label:`${dayjs(startDate).format('DD-MM')} / ${dayjs(endDate).format('DD-MM')}`,
        start: dayjs(startDate).format('DD-MM'),
        end:dayjs(endDate).format('DD-MM')
      });

      date = date.add(1, 'week'); // Move to the next Sunday
      i = i + 1;
    }
    setWeeks(generatedWeeks);
  },[year]);

  useEffect(() => {
    generateWeeks();
  }, [generateWeeks, year]);
  
  

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "16px",
            fontFamily: "Inter",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        >
          ฿ 9,999
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontFamily: "Inter",
            marginTop: "5px",
            color: "#6D6D6D",
          }}
        >
          Wallet Name
        </Typography>
      </Box>
            
      <SwiperCard
        tabs={weeks}
        
      />
    </>

    
  );
}
