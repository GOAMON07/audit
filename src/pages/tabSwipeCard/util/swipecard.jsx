import React from 'react'
import SwiperCore, { Pagination, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as S from './style'

SwiperCore.use([Pagination, Controller])

export const SwipeCards = ({
  activeIndex, containerBackGround, topVal, ...rest
}) => (rest?.children ? (
  <S.CardOuterWrapper className='cardOuterWrapper' containerBackGround={containerBackGround} topVal={topVal}>
    <Swiper
      pagination={{ totalClass: 'swiper-pagination', clickable: true }}
      slidesPerView={rest.slides || 'auto'}
      initialSlide={rest.initialSlide || 0}
      {...rest}
    >
      {(Array.isArray(rest.children) &&
          rest.children.map((child, index) => (
            <SwiperSlide id={'card-' + index} key={index}>
              <S.Card>{child}</S.Card>
            </SwiperSlide>
          ))) ||
          rest.children}
    </Swiper>
  </S.CardOuterWrapper>
) : (
  <div>Please pass children to render default swipe</div>
))

export default SwipeCards
