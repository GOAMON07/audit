import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TabButton = styled(motion.div)`
  color: ${(props) => props.color};
  position: relative;
  display: inline-block;
  z-index: 1;
  // max-width: 160px;
  // min-height: 40px;
  padding: 8px 16px 8px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // -o-text-overflow: ellipsis;
  border: none;
  background:${(props) => props.backGround || 'none'};
  .tabTitle {
    display: contents;
    color: ${(props) => props.color};
  }
  ${(props) => {
    if (props.isLeft && props.isColorChangeReq) {
      return `
      background: -webkit-linear-gradient(to right, ${props.defaultColor} 50%, ${props.activeColor} 50%);
      background: linear-gradient(to right, ${props.defaultColor} 50%, ${props.activeColor} 50%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      `
    }
    if (props.isRight && props.isColorChangeReq) {
      return `
      background: -webkit-linear-gradient(to right, ${props.activeColor} 50%, ${props.defaultColor} 50%);
      background: linear-gradient(to right, ${props.activeColor} 50%, ${props.defaultColor} 50%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      `
    }
    return ''
  }}
`
export const TabContainer = styled.div`
  background: ${(props) => props.backGround};
  padding: 16px ${(props) => (props.isRightPadding && 16) || 0}px 0px
    ${(props) => (props.isLeftPadding && 16) || 0}px;
  width: 100%;
`
export const TabInnerContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  white-space: nowrap;
  display: block;
  position: relative;
  padding-bottom: 32px;
  // ::-webkit-scrollbar {
  //   display: none;
  //   -ms-overflow-style: none; /* IE and Edge */
  //   scrollbar-width: none; /* Firefox */
  // }
`
export const ActiveBackGround = styled.div`
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  top: 0;
  position: absolute;
  background: ${(props) => props.backGround};
  z-index: 0;
  // max-width: 160px;
  min-height: 38px;
  padding: 8px 16px 9px;
  border-radius: 20px;
  border: none;
  transition: 0.3s ease-out;
`
export const CardOuterWrapper = styled.div`
  .swiper-pagination {
    display: none;
  }
  .swiper-slide {
    background: ${(props) => props.containerBackGround};
    overflow-y: scroll;
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

export const Card = styled.div``

export const TabSwipeCard = styled.div`
  background: ${(props) => props.backGround};
`
export const StaticContentWrapper = styled.div`
  background: ${(props) => props.backGround};
`
export const StaticChildWrapper = styled.div``
