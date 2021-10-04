import React from "react"
import { ActivePage, InActivePage } from "./icon"

const BreakView = (props) => {
  const {
    breakLabel,
    breakClassName,
    breakLinkClassName,
    breakHandler,
    getEventListener
  } = props
  const className = breakClassName || "break"

  return (
    <li className="break-button-container">
      <InActivePage />
      <a
        className="break-button-label"
        role="button"
        tabIndex="0"
        onKeyPress={breakHandler}
        {...getEventListener(breakHandler)}
      >
        {breakLabel}
      </a>
    </li>
  )
}

export default BreakView
