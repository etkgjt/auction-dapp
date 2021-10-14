import React, { useState, useEffect } from "react"
import banner from "../assets/images/ranking-banner.png"
import bannerDesktop from "../assets/images/banner-desktop.png"
import { useMediaQuery } from "react-responsive"

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
