import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Button } from "@material-ui/core";
// import Slide from "./slide";
import { TabSwipeCard } from "../tabSwipeCard";

export default function index() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        minWidth: "100vw",
        minHeight: "756px",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "375px",
                  height: "123px",
                  backgroundColor: "#ffffff",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
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
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
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
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                <Box
                  sx={{
                    marginTop: "45px",
                    marginLeft: "10px",
                  }}
                >
                  <TabSwipeCard
                    staticContentChildren={
                      <div style={{ height: 100 }}>Test</div>
                    }
                    onTabChange={(e) => setActiveIndex(e?.index)}
                    defaultTabIndex={activeIndex}
                    isAnimationReqOnClick={false}
                  >
                    <div
                      style={{
                        height: "500px",
                        background: "white",
                        margin: "0 16px 16px",
                        borderRadius: "16px",
                      }}
                    >
                      test1
                    </div>
                    <div
                      style={{
                        height: "240px",
                        background: "white",
                        margin: "0 16px 16px",
                        borderRadius: "16px",
                      }}
                    >
                      test2
                    </div>
                    <div
                      style={{
                        height: "240px",
                        background: "white",
                        margin: "0 16px 16px",
                        borderRadius: "16px",
                      }}
                    >
                      test3
                    </div>
                    <div
                      style={{
                        height: "240px",
                        background: "white",
                        margin: "0 16px 16px",
                        borderRadius: "16px",
                      }}
                    >
                      test4
                    </div>
                    <div
                      style={{
                        height: "240px",
                        background: "white",
                        margin: "0 16px 16px",
                        borderRadius: "16px",
                      }}
                    >
                      test5
                    </div>
                    <div
                      style={{
                        height: "240px",
                        background: "white",
                        margin: "0 16px 16px",
                        borderRadius: "16px",
                      }}
                    >
                      test6
                    </div>
                    <div
                      style={{
                        height: "240px",
                        background: "white",
                        margin: "0 16px 16px",
                        borderRadius: "16px",
                      }}
                    >
                      test7
                    </div>
                  </TabSwipeCard>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Navbar />
    </Box>
  );
}
