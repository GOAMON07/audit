import React, { useCallback, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./css/tab.styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function index({ tabs, ...rest }) {
  const sliderRefContent = useRef();
  const sliderRefMenu = useRef();

  const [currentTabs, setCurrentTabs] = useState(tabs);
  const [currentSwiper, setCurentSwiper] = useState(32);

  useEffect(() => {
    setCurrentTabs(tabs);
  }, [tabs]);

  useEffect(() => {
    console.log("currentSwiper", currentSwiper?.length);
  }, [currentSwiper]);

  useEffect(() => {
    sliderRefContent.current.swiper.slideTo(currentSwiper);
  }, [currentSwiper]);

  useEffect(() => {
    sliderRefMenu.current.swiper.slideTo(currentSwiper);
  }, [currentSwiper]);

  // useEffect(() => {
  //   sliderRefContent.current.swiper.slideTo(tabs.length - 1 );
  // }, [tabs]);

  // useEffect(() => {
  //   sliderRefMenu.current.swiper.slideTo(tabs.length - 1);
  // }, [tabs]);

  const getTabs = useCallback(() => {
    return currentTabs.map((tab, index) => (
      <SwiperSlide key={index} id="reset-wrap" style={{ width: "auto" }}>
        <S.SwappableTabWrapper>
          <S.SwappableTab
            onClick={() => {
              console.log(index);
              setCurentSwiper(index);
            }}
          >
            {tab.label}
          </S.SwappableTab>
        </S.SwappableTabWrapper>
      </SwiperSlide>
    ));
  }, [currentTabs]);

  const getCardContent = useCallback(() => {
    return (
      <S.CardOuterWrapper className="cardOuterWrapper">
        <Swiper
          // install Swiper modules
          pagination={{ totalClass: "swiper-pagination", clickable: true }}
          slidesPerView={"auto"}
          ref={sliderRefContent}
          onSlideChange={(item) => {
            setCurentSwiper(item.activeIndex);
          }}
        >
          {tabs.map((item) => {
            return (
              <>
                <SwiperSlide key={item.id}>
                  <S.Card>
                    <div
                      style={{
                        height: "500px",
                        background: "CornflowerBlue",
                      }}
                    >
                      Slide {item.id}
                    </div>
                  </S.Card>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </S.CardOuterWrapper>
    );
  }, [currentSwiper, tabs]);

  return (
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
  );
}
