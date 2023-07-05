import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Tabs } from './util/tabs'
import { SwipeCards } from './util/swipecard'
import * as S from './util/style'

export const TabSwipeCard = ({
  tabs, tabBarColor, onTabChange, defaultTabIndex, containerBackGround, operatingSystemType, staticContentChildren, isScrollGestureReq, isAnimationReqOnClick, ...rest
}) => {
  const [activeIndex, setActiveIndex] = useState('')
  const [touchDirection, setTouchDirection] = useState('')
  const [detectTouch, setDetectTouch] = useState(false)
  const [currentSwiper, setCurentSwiper] = useState(null)
  const staticContentRef = useRef(null)
  const { children = [] } = rest || { children: [] }
  useEffect(() => {
    let timeOut = ''
    if (onTabChange && tabs[activeIndex]) {
      onTabChange({ ...tabs[activeIndex], index: activeIndex })
    }
    if (isScrollGestureReq) {
      const tabContainer = document.getElementsByClassName('tabContainer')?.[0]
      const tabButtonValues = document.getElementsByClassName('tabButton')?.[activeIndex]
      if (activeIndex === 0) {
        tabContainer.scrollLeft = 0
      } else if (activeIndex === tabs?.length - 1) {
        timeOut = setTimeout(() => {
          tabContainer.scrollLeft = tabContainer?.scrollWidth
        }, 10)
      } else if (activeIndex > 0) {
        tabContainer.scrollLeft = tabButtonValues?.offsetLeft - 32
      }
    }
    return () => clearTimeout(timeOut)
  }, [activeIndex])


  useEffect(() => {
    if (defaultTabIndex !== '') {
      setActiveIndex(defaultTabIndex)
      setTouchDirection(defaultTabIndex > activeIndex ? 'next' : 'prev')
    }
    if (currentSwiper) {
      currentSwiper.slideTo(defaultTabIndex, '0s')
    }
  }, [defaultTabIndex, currentSwiper])
  const updateActiveIndex = (activeInd) => {
    const paginationDots = document.getElementsByClassName('swiper-pagination-bullet')
    const dot = paginationDots[activeInd]
    if (dot) {
      dot.click()
    }
    setActiveIndex(activeInd)
  }

  return (activeIndex !== '' ?
    <S.TabSwipeCard backGround={containerBackGround}>
      <S.StaticContentWrapper ref={staticContentRef} backGround={containerBackGround}>
        <S.StaticChildWrapper>
          {staticContentChildren}
        </S.StaticChildWrapper>
        <Tabs
          activeIndex={activeIndex}
          setActiveIndex={(index) => updateActiveIndex(index)}
          touchDirection={touchDirection}
          detectTouch={detectTouch}
          setTouchDirection={setTouchDirection}
          operatingSystemType={operatingSystemType}
          isAnimationReqOnClick={isAnimationReqOnClick}
          {...{
          tabs,
          tabBarColor,
          ...rest
        }}
        />
      </S.StaticContentWrapper>
      {children.length > 0 && (
        <SwipeCards
          {...rest}
          onSlideChange={(e) => {
            setTouchDirection(e.swipeDirection)
            setActiveIndex(e.activeIndex)
          }}
          initialSlide={activeIndex}
          onTouchMove={(s) => {
            setDetectTouch(true)
            setTouchDirection(s.swipeDirection)
          }}
          onTouchEnd={() => {
            setDetectTouch(false)
            setTouchDirection('')
          }}
          onSwiper={(s) => setCurentSwiper(s)}
          containerBackGround={containerBackGround}
        >
          {tabs?.length < children.length
            ? children.filter((child, index) => index < tabs.length)
            : children}
        </SwipeCards>
      )}
    </S.TabSwipeCard>
    : '')
}

export default TabSwipeCard

TabSwipeCard.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  ).isRequired,
  tabBarColor: PropTypes.shape({
    defaultColor: PropTypes.string,
    activeColor: PropTypes.string,
    backGround: PropTypes.string,
    tabBackGround: PropTypes.string
  }),
  onTabChange: PropTypes.func.isRequired,
  defaultTabIndex: PropTypes.number,
  containerBackGround: PropTypes.string,
  operatingSystemType: PropTypes.string,
  staticContentChildren: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.element]),
  isScrollGestureReq: PropTypes.bool,
  isAnimationReqOnClick: PropTypes.bool
}

TabSwipeCard.defaultProps = {
  tabBarColor: {
    defaultColor: '#ffffff',
    activeColor: '#002D63',
    backGround: '#0056ff',
    tabBackGround: '#ffffff',
  },
  defaultTabIndex: 0,
  containerBackGround: '#0056ff',
  operatingSystemType: undefined,
  staticContentChildren: '',
  isScrollGestureReq: true,
  isAnimationReqOnClick: true
}
