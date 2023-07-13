import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Navbar from "../Navbar";
import React,{useMemo, useState,useEffect} from 'react'
import dayjs from 'dayjs'

import Typography from "@mui/material/Typography";
// import Slide from "./slide";

import SwiperCard from "../../components/swiperCard";

export default function index() {

  const [date,setDate] =  useState([
    { id: "1", label: "THIS WEEK", active: true },
    { id: "2", label: "LAST WEEK" },
    { id: "3", label: "29/05 - 04/06" },
    { id: "4", label: "22/06 - 28/06" },
    { id: "5", label: "22/04 - 28/06" },
    { id: "6", label: "23/03 - 28/06" }
  ])

 
  

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
        tabs={date}
      />
    </>

    
  );
}
