import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitLogin = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "https://us-central1-audit-396115.cloudfunctions.net/expressApi/api/auth/login",
          { username, password }
        );
        const token = response.data.data.access_token;
        localStorage.setItem("token", token);
        const data = { userId: response.data.data.id };

        localStorage.setItem("userProfile", JSON.stringify(data));
        if (!token) {
          Swal.fire({
            icon: "error",
            title: "...เกิดข้อผิดพลาด",
            text: "กรุณาเข้าสู่ระบบ",
          });
        }

        navigate("/UserWallet");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "...เกิดข้อผิดพลาด",
          text: "กรุณตรวจสอบชื่อบัญชี และ รหัสผ่านของท่าน ของท่าน",
        });
      }
    },
    [username, password, navigate]
  );

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
        <form onSubmit={submitLogin}>
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
                  type="username"
                  name="username"
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
                  type="password"
                  name="password"
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
                  type="submit"
                  variant="contained"
                  size="Larg"
                  sx={{
                    backgroundColor: "#52AA5E",
                    width: "80%",
                    height: "32px",
                    "&:hover": {
                      backgroundColor: "#3c8e4f",
                    },
                    fontSize: "16px",

                    fontStyle: "Bold",
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
        </form>
      </Box>
    </Box>
  );
}
