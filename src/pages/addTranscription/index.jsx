import React, { useState, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../.././styles.css";
import Cetagory from "../../components/category";
import Textarea from "@mui/joy/Textarea";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import Loading from "../../Loading";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import "./MyDatePicker.css";

export default function Index() {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [transactionDate, setTransactionDate] = useState(null);
  const [isSelectCategory, setisSelectCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState(Number(""));
  const [isLoading, setIsLoading] = useState(false);
  const currentDate = new Date();

  const handleDateChange = (date) => {
    setTransactionDate(date);
  };

  const handleTextChange = (event) => {
    setDescription(event.target.value);
  };
  const handleNumberChange = (event) => {
    const sanitizedValue = event.target.value.replace(/,/g, "");
    const re = /\d+(\.\d+)?/;

    if (!re.test(sanitizedValue.trim()) && sanitizedValue.length !== 0) return;
    const formattedValue = Number(sanitizedValue).toLocaleString("en-US");
    setAmount(formattedValue);
  };

  const postDataTransaction = useCallback(async () => {
    const token = localStorage.getItem("token");
    const dataFromLocalStroage = localStorage.getItem("userProfile");
    const dataFromLocalStroageParse = JSON.parse(dataFromLocalStroage);
    const formattedDate = dayjs(transactionDate).format("YYYY-MM-DD");

    try {
      setIsLoading(true)
      const response = await axios.post(
        "https://us-central1-audit-396115.cloudfunctions.net/expressApi/api/transaction",
        {
          category: selectedCategory.category,
          type: selectedCategory.type,
          amount: parseFloat(amount.replace(/,/g, "")),
          description,
          transactionDate: formattedDate,
          walletId: dataFromLocalStroageParse.idWallet,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          text: "บันทึกข้อมูลสำเร็จ",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "...เกิดข้อผิดพลาด",
        text: "การเพิ่มข้อมูลของท่านไม่ถูกต้อง",
      });
    }finally{
      setIsLoading(false)
      navigate("/Dasborad")
    }
  }, [amount, description, transactionDate]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {isSelectCategory ? (
            <Cetagory
              setisSelectCategory={setisSelectCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ) : (
            <Box
              sx={{
                backgroundColor: "#F5F5F5",
                minWidth: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                overflowX: "hidden",
                alignItems: "center",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      backgroundColor: "#F5F5F5",
                    }}
                  >
                    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
                      <Toolbar>
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                          onClick={() => {
                            navigate("/Dasborad");
                          }}
                        >
                          <CloseIcon
                            sx={{ marginLeft: "20px", color: "#7A7A7A" }}
                          />
                        </IconButton>
                        <Typography
                          variant="h1"
                          component="div"
                          sx={{
                            flexGrow: 1,
                            fontSize: "16px",
                            fontStyle: "Regular",
                            fontFamily: "inter",
                            color: "black",
                            textTransform: "none",
                          }}
                        >
                          Add Transcription
                        </Typography>
                        <Button
                          variant="h1"
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontStyle: "Regular",
                            fontFamily: "inter",
                            textTransform: "none",
                          }}
                          onClick={() => {
                            // navigate("/Dasborad");
                            postDataTransaction();
                          }}
                        >
                          save
                        </Button>
                      </Toolbar>
                    </AppBar>
                  </Box>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "347px",
                  height: "284px",
                  backgroundColor: "#FFFFFF",
                  marginTop: "75px",
                  marginLeft: "14px",
                  borderRadius: "20px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box>
                      <Typography
                        sx={{
                          width: "700",
                          fontFamily: "inter",
                          lineHeight: "19.36px",
                          fontSize: "16px",
                          color:
                            selectedCategory.type === "outcome"
                              ? "#FF8484"
                              : "#76B5FF",
                          marginLeft: "35px",
                          marginTop: "20px",
                        }}
                      >
                        ฿{" "}
                        <input
                          type="text"
                          value={amount}
                          onChange={handleNumberChange}
                          placeholder="กรอกเงินของท่านที่ต้องการบันทึก"
                          style={{
                            border: "0px",
                            color:
                              selectedCategory.type === "outcome"
                                ? "#FF8484"
                                : "#76B5FF",
                            fontSize: "17px",
                          }}
                        />
                      </Typography>
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "15px",
                            marginTop: "20px",
                          }}
                        >
                          <span
                            style={{
                              backgroundColor: "#D9D9D9",
                              borderRadius: "50%",
                              width: "26px",
                              height: "25px",
                              marginRight: "15px",
                            }}
                          ></span>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              color: "#7D7D7D",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setisSelectCategory(true);
                            }}
                          >
                            {selectedCategory === ""
                              ? "Select Category"
                              : selectedCategory?.category}
                          </Typography>
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
                <Box>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "15px",
                        marginTop: "20px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#D9D9D9",
                          borderRadius: "50%",
                          width: "26px",
                          height: "25px",
                          marginRight: "15px",
                        }}
                      ></span>
                      <Textarea
                        placeholder="Write Note"
                        minRows={2}
                        type="text"
                        value={description}
                        onChange={handleTextChange}
                        sx={{ marginRight: "px" }}
                      />
                    </Box>
                  </Grid>
                </Box>
                <Box>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "15px",
                        marginTop: "20px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#D9D9D9",
                          borderRadius: "50%",
                          width: "26px",
                          height: "25px",
                          marginRight: "15px",
                        }}
                      ></span>
                      <DatePicker
                        className="custom-datepicker"
                        maxDate={currentDate}
                        value={transactionDate}
                        selected={transactionDate}
                        onChange={handleDateChange}
                        placeholderText="Select Date"
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Box>
          )}
        </div>
      )}
    </div>
  );
}
