import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from "@mui/material/Grid";
import * as S from "./css/tab.styled";
import Box from "@mui/material/Box";
import Container01 from "../tracsaction component/container01";
import Container02 from "../tracsaction component/container02";
import _ from "lodash";
import Loading from "../../Loading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { getDataTransactionAPI } from "../../module/transaction/transactionCrude";

export default function index({ tabs, ...rest }) {
  const sliderRefContent = useRef();
  const sliderRefMenu = useRef(); //ศึกษาเพิ่ม
  const [dataDate, setDataDate] = useState([]);
  const [currentTabs, setCurrentTabs] = useState(tabs);
  const [currentSwiper, setCurentSwiper] = useState(0);
  const [transactionData, setTransactionData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const reversTabs = useMemo(() => {
    const dataTabs = _.orderBy(tabs, ["id"], ["desc"]);
    return dataTabs;
  }, [tabs]);

  useEffect(() => {
    setCurrentTabs(reversTabs);
  }, [reversTabs]);

  useEffect(() => {
    console.log("currentSwiper", currentSwiper?.length);
  }, [currentSwiper]);

  useEffect(() => {
    sliderRefContent.current.swiper.slideTo(currentSwiper); //ศึกษาเพิ่ม
    sliderRefMenu.current.swiper.slideTo(currentSwiper);
  }, [currentSwiper, reversTabs]);

  // useEffect(() => {
  //   console.log("tabs=>", reversTabs);
  //   console.log("dateeeeeeeeeeeeeeeeeeee", dataDate);
  // }, [reversTabs, dataDate]);

  const getDataTransaction = useCallback(async (stateDataDate) => {
    try {
      setIsLoading(true);
      const res = await getDataTransactionAPI(stateDataDate);
      if (res.status === "success") {
        console.log("ข้อมูลtransaction", res);
        setTransactionData(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    const dataTabs = reversTabs[currentSwiper];

    // if (dataDate.length > 0) {
    //   debugger

    //   getDataTransaction(dataDate);
    // } else
    if (dataTabs) {
      getDataTransaction({
        startDate: dataTabs.start,
        endDate: dataTabs.end,
      });
    }
    // getDataTransaction(dataTabs);
    console.log("ข้อมูลเริ่มต้น",tabs);
    console.log("วันที่ส่ง",dataTabs?.start);
    console.log("ข้อมูลที่เราอยากจะใช้",reversTabs);
    console.log("ข้อมูลที่ส่งไปใช้", reversTabs[currentSwiper]);
  }, [currentSwiper, reversTabs]);

  const getTabs = useCallback(() => {
    return currentTabs.map((tab, index) => (
      <SwiperSlide key={index} id="reset-wrap" style={{ width: "auto" }}>
        <S.SwappableTabWrapper>
          <S.SwappableTab
            onClick={() => {
              const find = tabs.find((item) => {
                return item.id === index;
              });
              console.log("ข้อมูลที่ค้นหา ของ taps",find);
              setDataDate({
                startDate: find.start,
                endDate: find.end,
              });
              setCurentSwiper(index);
            }}
          >
            <p
              id={index}
              style={{
                borderBottom: `1px solid ${
                  currentSwiper === index ? "black" : "white"
                }`,
              }}
            >
              {tab.label}
            </p>
          </S.SwappableTab>
        </S.SwappableTabWrapper>
      </SwiperSlide>
    ));
  }, [currentTabs, currentSwiper]);

  const getCardContent = useCallback(() => {
    return (
      <S.CardOuterWrapper className="cardOuterWrapper">
        <Swiper
          // install Swiper modules
          pagination={{ totalClass: "swiper-pagination", clickable: true }}
          slidesPerView={"auto"}
          ref={sliderRefContent}
          onSlideChange={(item) => {
            const find = tabs.find((item2) => {
              return item2.id === item.activeIndex;
            });
            console.log("ข้อมูลที่ค้นหา ของ card",find);
            console.log("active slide",item);
            setCurentSwiper(item.activeIndex);
            setDataDate({
              startDate: find.start,
              endDate: find.end,
            }); //format วันที่ กับ setData เข้า useState  และใส่เข้า api
          }}
        >
          
          {reversTabs.map((item) => {
            return (
              <>
                <SwiperSlide key={item.id}>
                  <S.Card>
                    <div>
                      <Box sx={{ padding: "10px" }}>
                        <Grid item xs={12}>
                          <Container01 transactionData={transactionData} />
                        </Grid>
                      </Box>
                      <Box sx={{ padding: "10px" }}>
                        <Grid item xs={12}>
                          <Container02
                            transactionData={transactionData}
                            dataDate={reversTabs[currentSwiper]}
                          />
                        </Grid>
                      </Box>
                    </div>
                  </S.Card>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </S.CardOuterWrapper>
    );
  }, [currentSwiper, reversTabs, transactionData]);

  return (
    <div>
      
        <Loading loading={isLoading}/>
      
        <React.Fragment>
          <Swiper
            freeMode
            slidesPerView="auto"
            autoHeight
            spaceBetween={8}
            onSlideChange={(item) => {
              setCurentSwiper(item.activeIndex);
            }}
            ref={sliderRefMenu}
          >
            {getTabs()}
          </Swiper>
          {getCardContent()}
        </React.Fragment>
     
    </div>
  );
}
