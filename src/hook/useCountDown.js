import React from "react"
export default function useCoundDown(initValue = 480000) {
  const [countDown, setCoundDown] = React.useState(0)
  React.useEffect(() => {
    const id = setInterval(() => {
      setCoundDown((pre) => pre - 1000)
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])
  React.useEffect(() => {
    setCoundDown(initValue)
  }, [initValue])
  return countDown
}
