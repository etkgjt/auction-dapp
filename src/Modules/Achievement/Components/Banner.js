import React, { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import banner from "../assets/images/banner.png"
import bannerDesktop from "../assets/images/banner-desktop.png"

const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 })
  return (
    <div className="inviter-banner">
      <img
        src={isMobile || isTablet ? banner : bannerDesktop}
        width="100%"
        height="auto"
      />
    </div>
  )
}

export default Banner
