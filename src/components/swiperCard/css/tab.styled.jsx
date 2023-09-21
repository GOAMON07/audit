import styled, { css } from 'styled-components'


export const SwappableTabWrapper = styled.div`
  min-height: 10px;
  padding: 2px;
`



export const SwappableTab = styled.div`
  position: relative;
  min-height: 10px;
  padding: 8px 16px 9px;

  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  color: #000;
`

export const CardOuterWrapper = styled.div`
  .swiper-pagination {
    display: none;
  }
  .swiper-slide {
    height: calc(100vh - 330px);
    ::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }
  overflow-y: scroll;
  position: relative;
  margin-top: -8px;
`

export const Card = styled.div`
height: "700px";
`