import React, { useState, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { set } from "lodash";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  walletName: Yup.string().required("กรุณากรอกข้อมูลของท่าน"),
  detail: Yup.string().required("กรุณากรอกข้อมูลของท่าน"),
});

const initialValues = {
  walletName: "",
  detail: "",
};

export default function AddWallet() {
  const [walletName, setWalletName] = useState("");
  const [detail, setDetail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  const submitAddData = useCallback(async () => {
    const token = localStorage.getItem("token");
    const data = localStorage.getItem("userProfile");
    const { userId } = JSON.parse(data);

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://us-central1-audit-396115.cloudfunctions.net/expressApi/api/wallet",
        { walletName, detail, userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setIsLoading(true);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "...เกิดข้อผิดพลาด",
      });
    } finally {
      navigate("/UserWallet");
      Swal.fire({
        icon: "success",
        text: "บันทึกข้อมูลสำเร็จ",
      });
    }
  }, [walletName, detail]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      submitAddData(values.username, values.lastname, values.age);
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ backgroundColor: "#F5F5F5" }}>
                  <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
                    <Toolbar>
                      <IconButton
                        size="large"
                        edge="start"
                        color="bl"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => {
                          navigate("/UserWallet");
                        }}
                      >
                        <CloseIcon sx={{ marginLeft: "15px" }} />
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
                        }}
                      >
                        Add Wallet
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
                        type="submit"
                      >
                        save
                      </Button>
                    </Toolbar>
                  </AppBar>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            xs={12}
            sx={{
              display: "flex",

              alignItems: "center",
              justifyContent: "center",
              minHeight: "70vh",
            }}
          >
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      width: "347px",
                      height: "284px",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Wallet name"
                          size="small"
                          sx={{
                            fontSize: "16px",
                            width: "289px",
                            height: "41px",
                            marginLeft: "30px",
                            marginBottom: "8px",
                            marginTop: "14px",
                          }}
                          InputLabelProps={{
                            sx: { color: "#D9D9D9" },
                          }}
                          value={formik.values.walletName}
                          onChange={formik.handleChange}
                          name="walletName"
                        />
                        {formik?.touched.walletName &&
                          formik?.errors.walletName && (
                            <Typography
                              variant="p"
                              sx={{
                                color: "red",
                                fontSize: "14px",
                                marginLeft: "32px",
                              }}
                            >
                              {formik?.errors.walletName}
                            </Typography>
                          )}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Detail"
                          size="small"
                          multiline
                          rows={4}
                          sx={{
                            width: "289px",
                            height: "122px",
                            marginTop: "10px",
                            marginLeft: "30px",
                            marginBottom: "0px",
                          }}
                          InputLabelProps={{
                            sx: { color: "#D9D9D9" },
                          }}
                          value={formik.values.detail}
                          onChange={formik.handleChange}
                          name="detail"
                        />
                        {formik?.touched.detail && formik?.errors.detail && (
                          <Typography
                            variant="p"
                            sx={{
                              color: "red",
                              fontSize: "14px",
                              marginLeft: "32px",
                            }}
                          >
                            {formik?.errors.detail}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
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
        </form>
      </Box>
    </Box>
  );
}
