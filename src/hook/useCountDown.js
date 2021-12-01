import React, { useRef, useState } from "react"
export default function useCoundDown(initValue = 480000) {
  const [firstTime, setFirstTime] = useState(true)
  const [countDown, setCoundDown] = React.useState(0)
  const intervalIdRef = useRef()
  React.useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setCoundDown((pre) => {
        if (pre - 1000 >= 0) {
          return pre - 1000
        }
        clearInterval(intervalIdRef.current)
        return 0
      })
    }, 1000)
    return () => {
      clearInterval(intervalIdRef.current)
    }
  }, [])
  React.useEffect(() => {
    if (firstTime) {
      setFirstTime(false)
      setCoundDown(initValue)
    }
  }, [initValue])
  return countDown
}
