import React, { useCallback, useEffect, useState,useRef } from "react";
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
  const [currentSwiper, setCurentSwiper] = useState(0)

  useEffect(() => {
    setCurrentTabs(tabs);
  }, [tabs]);

  useEffect(() => {
    sliderRefContent.current.swiper.slideTo(currentSwiper);
  }, [currentSwiper]);

  useEffect(() => {
    sliderRefMenu.current.swiper.slideTo(currentSwiper);
  }, [currentSwiper]);


  const getTabs =  useCallback(() => {
    return (
    currentTabs.map((tab, index) => (
      <SwiperSlide key={index} id="reset-wrap" style={{ width: "auto" }}>
        <S.SwappableTabWrapper>
          <S.SwappableTab
            onClick={() => {
              console.log(index);
              setCurentSwiper(index)
            }}
          >
            {tab.label}
          </S.SwappableTab>
        </S.SwappableTabWrapper>
      </SwiperSlide>
    )) )
  },[currentSwiper]);

  const getCardContent = useCallback(() =>{
    return (
    <S.CardOuterWrapper className="cardOuterWrapper">
    <Swiper
      // install Swiper modules
      pagination={{ totalClass: "swiper-pagination", clickable: true }}
      slidesPerView={"auto"}
      ref={sliderRefContent}  
      onSlideChange={(item) => {
        setCurentSwiper(item.activeIndex)
      }}     
    >
      <SwiperSlide>
        <S.Card>
          <div
            style={{
              height: "500px",
              background: "CornflowerBlue",
            }}
          >
            Slide 1
          </div>
        </S.Card>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            height: "500px",
            background: "Crimson",
          }}
        >
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            height: "500px",
            background: "Aquamarine",
          }}
        >
          Slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            height: "500px",
            background: "Chartreuse",
          }}
        >
          Slide 4
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  </S.CardOuterWrapper>
    )

  },[currentSwiper])

  return (
    <React.Fragment>
      <Swiper
        freeMode
        slidesPerView="auto"
        autoHeight
        spaceBetween={8}
        onSlideChange={(item) => {
          setCurentSwiper(item.activeIndex)
        }} 
        ref={sliderRefMenu}
        >
        {getTabs()}
      </Swiper>
      {getCardContent()}
    </React.Fragment>
  );
}
