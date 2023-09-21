import React, { useMemo, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import _ from "lodash";
import dayjs from "dayjs";
import Avatar from "@mui/material/Avatar";


export default function container02({ transactionData, dataDate }) {
  const combinedData = useMemo(() => {
    // แปลง dataDate เป็นรูปแบบวันที่ 'DD/MM/YYYY'
    const startDate = new Date(dataDate.start);
    const endDate = new Date(dataDate.end);
    const dateLabels = [];
    while (startDate <= endDate) {
      dateLabels.push(startDate.toLocaleDateString("en-GB"));
      startDate.setDate(startDate.getDate() + 1);
    }

    const combinedData = dateLabels.map((dateLabel) => {
      const transactions =
        transactionData &&
        transactionData?.data?.filter((transaction) => {
          const dateTransaction = new Date(
            transaction.transactionDate
          ).toLocaleDateString("en-GB");
          return dateTransaction === dateLabel;
        });

      if (transactions && transactions.length > 0) {
        return {
          [dateLabel]: transactions,
        };
      } else {
        return { [dateLabel]: [] };
      }
    });

    return combinedData;
  }, [dataDate, transactionData]);

  const totalAmountTransaction = useCallback(
    (dataItem) => {
      return _.sumBy(dataItem, "amount") ?? "0";
    },
    [combinedData]
  );

  const formattedValueTransactionAmount = useCallback(
    (dataItem) => {
      const chang = Number(totalAmountTransaction(dataItem)).toLocaleString(
        "en-US"
      );
      return chang;
    },
    [totalAmountTransaction]
  );

  const formatAmount = useCallback(
    (dataItem) => {
      const chang = Number(dataItem).toLocaleString("en-US");
      return chang;
    },
    [combinedData]
  );

  return (
    <div
      style={{ height: "500px", overflowY: "scroll", paddingBottom: "200px" }}
    >
      {combinedData.map((dataItem, index) => (
        <div key={index}>
          {Object.keys(dataItem).map((dateLabel) => (
            <div key={dateLabel}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "auto",
                  height: "200px",
                }}
              >
                <Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#6D6D6D",
                          marginLeft: "10px",
                        }}
                      >
                        {dateLabel}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{ fontSize: "14px", marginRight: "10px",color:"#6D6D6D" }}
                      >
                        {formattedValueTransactionAmount(dataItem[dateLabel])}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider />

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {dataItem[dateLabel].length > 0 ? (
                    dataItem[dateLabel].map((transaction, transactionIndex) => (
                      <React.Fragment key={transactionIndex}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                            }}
                          >
                            <Grid item xs={12}>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "15px",
                                  marginTop: "15px",
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
                                    fontFamily: "inter",
                                    fontSize: "15px",
                                    color: "#4E4E4E",
                                  }}
                                >
                                  {transaction.category}
                                </Typography>
                              </Box>
                            </Grid>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                            }}
                          >
                            <Typography
                              sx={{
                                color:
                                  transaction.type === "income"
                                    ? "#76B5FF"
                                    : "#FF8484",
                                fontSize: "14px",
                                marginRight: "10px",
                                marginTop: "15px",
                              }}
                            >
                              {formatAmount(transaction.amount)}
                            </Typography>
                          </Box>
                        </Box>
                      </React.Fragment>
                    ))
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                      }}
                    >
                      <Typography sx={{ fontSize: "14px", color: "#4E4E4E" }}>
                        Not have transaction.
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
