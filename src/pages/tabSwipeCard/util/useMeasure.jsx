import { useState, useLayoutEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { useCallbackRef } from './useCallBackRef'

export function useMeasure() {
  const [element, attachRef] = useCallbackRef()
  const [bounds, setBounds] = useState({})

  useLayoutEffect(() => {
    const onResize = ([entry]) => {
      setBounds({
        height: entry.contentRect.height,
        width: entry.contentRect.width
      })
    }

    const observer = new ResizeObserver(onResize)

    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
    }
  }, [element])

  return {
    bounds,
    ref: attachRef
  }
}

export default useMeasure