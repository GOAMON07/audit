import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

//จำลอง Data
import mockData from "../../mockData/index";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [protecLogin, setProtecLogin] = useState(null);
  const [reload, setReload] = useState(1);

  let navigate = useNavigate();

  const handleLogin = () => {
    if (username === mockData.username && password === mockData.password) {
      // Swal.fire({
      //   icon: "success",
      //   title: "...เข้าสู่ระบบสำเร็จ",
      //   text: "กรุณารอสักครู่",
      // });
      window && localStorage.setItem("accessToken","username")
      navigate("/UserWallet");
      setReload(Math.floor(Date.now() / 1000));
    } else {
      Swal.fire({
        icon: "error",
        title: "...เกิดข้อผิดพลาด",
        text: "กรุณตรวจสอบชื่อบัญชี และ รหัสผ่านของท่าน ของท่าน",
      });
    }
  };

  useEffect(() => {}, [reload]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                label="Username"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  sx: { color: "#D9D9D9" },
                }}
                sx={{
                  width: "80%",
                  boxShadow: "0px 2px 4px #D9D9D9",
                  fontSize: "16px",
                }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                label="Password"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  sx: { color: "#D9D9D9" },
                }}
                sx={{
                  width: "80%",
                  boxShadow: "0px 2px 4px #D9D9D9",
                  fontSize: "16px",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                size="Larg"
                sx={{
                  
                  backgroundColor: "#52AA5E",
                  width: "80%",
                  height:"32px",
                  "&:hover": {
                    backgroundColor: "#3c8e4f",
                  },
                  fontSize: "16px",

                  fontStyle: "Bold",
                  
                }}
                onClick={() => {
                  handleLogin();
                  
                }}
              >
                Login
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",

                  fontStyle: "Regular",
                  color: "#D9D9D9",
                }}
              >
                V.11062023-01
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
