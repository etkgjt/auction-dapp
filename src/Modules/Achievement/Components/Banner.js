import React, { useState, useEffect } from "react"
import banner from "../assets/images/banner.png"

const Banner = () => {
  return (
    <div className="inviter-banner">
      <img src={banner} width="100%" height="auto" />
    </div>
  )
}

export default Banner
