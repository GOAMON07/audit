import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { useMeasure } from "./useMeasure";
import * as S from "./style";
import * as T from "./constant";

export const Tabs = ({
  activeIndex,
  setActiveIndex,
  touchDirection,
  detectTouch,
  setTouchDirection,
  tabs,
  operatingSystemType,
  isAnimationReqOnClick,
  ...rest
}) => {
  const { tabBarColor } = rest;
  const [activeTabValue, setActiveTabValue] = useState({
    left: 0,
    right: 0,
    isLeftPaddingReq: true,
    isRightPaddingReq: false,
  });
  const [isLeftPaddingReq, setIsLeftPaddingReq] = useState(false);
  const { bounds, ref } = useMeasure();
  const childRefs = useRef(new Map());
  const tabListRef = useRef();
  const operatingSystem =
    (!operatingSystemType && T.operatingSystem) || operatingSystemType;
  const windowInnerWidth = typeof window !== "undefined" && window?.innerWidth;
  const nextTabOperations = (stateValues, target, nextElement) => {
    let nextVals = { ...stateValues };
    if (
      detectTouch &&
      nextElement &&
      operatingSystem?.toLowerCase() === "ios"
    ) {
      nextVals = {
        ...nextVals,
        left: nextVals?.left + target.offsetWidth / 2,
        right: nextVals?.right - nextElement.offsetWidth / 2,
      };
    }
    return nextVals;
  };

  const prevTabOperations = (stateValues, target, prevElement) => {
    let prevVals = { ...stateValues };
    if (
      detectTouch &&
      activeIndex &&
      operatingSystem?.toLowerCase() === "ios"
    ) {
      prevVals = {
        ...prevVals,
        left: prevVals?.left - prevElement?.offsetWidth / 2,
        right: prevVals?.right + target?.offsetWidth / 2,
      };
    }
    return prevVals;
  };

  const isBetween = (val, high, low) =>
    val < high &&
    val > low &&
    activeIndex !== tabs?.length - 1 &&
    activeIndex !== tabs?.length - 2;

  useEffect(() => {
    const target = childRefs.current.get(activeIndex);
    const nextElement = childRefs.current.get(activeIndex + 1);
    const prevElement = childRefs.current.get(activeIndex - 1);
    const container = tabListRef.current;
    if (target) {
      const cRect = container.getBoundingClientRect();
      // when container is `display: none`, width === 0.
      // ignore this case
      if (cRect.width === 0) {
        return;
      }
      const left = _.times(
        activeIndex,
        (index) => childRefs.current.get(index).offsetWidth
      ).reduce((r, e) => r + e, 0);
      let stateValues = {
        left,
        right: cRect.right - (cRect.left + left + target.offsetWidth),
      };
      if (
        touchDirection === "next" &&
        (nextElement || activeIndex + 1 === tabs?.length)
      ) {
        stateValues = {
          ...nextTabOperations(stateValues, target, nextElement),
        };
      } else if (
        (prevElement && touchDirection === "prev") ||
        activeIndex === 0
      ) {
        stateValues = {
          ...prevTabOperations(stateValues, target, prevElement),
        };
      }
      setActiveTabValue({
        hasValue: true,
        ...stateValues,
        isLeftPaddingReq: !prevElement,
        isRightPaddingReq: !nextElement,
      });
    }
  }, [activeIndex, bounds, touchDirection, detectTouch]);

  useEffect(() => {
    const container = tabListRef?.current?.getBoundingClientRect();
    const target = childRefs?.current
      ?.get(activeIndex)
      ?.getBoundingClientRect();
    const rightPercentage = Math.round((target.right / container.right) * 100);
    if (
      isBetween(rightPercentage, windowInnerWidth <= 350 ? 130 : 110, 80) ||
      isBetween(rightPercentage, windowInnerWidth <= 350 ? 20 : 8, 0)
    ) {
      setIsLeftPaddingReq(true);
    } else {
      setIsLeftPaddingReq(false);
    }
  }, [activeIndex]);

  const getActiveFlag = (index) => {
    if (
      touchDirection === "next" &&
      detectTouch &&
      operatingSystem?.toLowerCase() === "ios"
    ) {
      return index === activeIndex || index === activeIndex + 1;
    }
    if (
      touchDirection === "prev" &&
      detectTouch &&
      operatingSystem?.toLowerCase() === "ios"
    ) {
      return index === activeIndex || index === activeIndex - 1;
    }
    return index === activeIndex;
  };

  const onTabClick = (index) => {
    setActiveIndex(index);
    setTouchDirection(index > activeIndex ? "next" : "prev");
  };

  return (
    <S.TabContainer
      ref={ref}
      backGround={tabBarColor?.backGround}
      isLeftPadding={activeTabValue?.isLeftPaddingReq || isLeftPaddingReq}
      isRightPadding={activeTabValue?.isRightPaddingReq}
      className="tabOuterContainer"
    >
      <S.TabInnerContainer ref={tabListRef} className="tabContainer">
        {tabs?.map((tab, index) => {
          const isActive = getActiveFlag(index);
          return (
            <S.TabButton
              key={index}
              id={tab?.id || `tab-${index + 1}`}
              onClick={() => onTabClick(index)}
              ref={(el) => childRefs.current.set(index, el)}
              color={
                isActive ? tabBarColor?.activeColor : tabBarColor?.defaultColor
              }
              activeColor={tabBarColor?.activeColor}
              defaultColor={tabBarColor?.defaultColor}
              isColorChangeReq={
                detectTouch && operatingSystem?.toLowerCase() === "ios"
              }
              isLeft={
                touchDirection &&
                (touchDirection === "next"
                  ? activeIndex !== tabs?.length - 1 && activeIndex === index
                  : activeIndex - 1 === index)
              }
              isRight={
                touchDirection &&
                (touchDirection === "next"
                  ? activeIndex + 1 === index
                  : activeIndex !== 0 && activeIndex === index)
              }
              className="tabButton"
              backGround={
                isActive && !isAnimationReqOnClick && tabBarColor?.tabBackGround
              }
            >
              <h3>{tab?.label}</h3>
            </S.TabButton>
          );
        })}
        {activeTabValue.hasValue && (isAnimationReqOnClick || detectTouch) && (
          <S.ActiveBackGround
            left={activeTabValue.left}
            right={activeTabValue.right}
            backGround={tabBarColor?.tabBackGround}
            className="activeTabMotionTab"
          />
        )}
      </S.TabInnerContainer>
    </S.TabContainer>
  );
};

export default Tabs;
