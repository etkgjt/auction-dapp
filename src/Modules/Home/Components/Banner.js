import React, { useState, useEffect } from "react"
import Carousel from "react-owl-carousel3"
import {
  getListSelector,
  getListLoadingSelector
} from "../Store/BannerSlider/selector"

import { actions } from "../Store/BannerSlider/reducer"
import { useDispatch, useSelector } from "react-redux"

const options = {
  autoplay: true,
  nav: false,
  loop: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  margin: 0,
  dots: true,
  lazyLoad: true,
  items: 1,
  autoHeight: true
}

const Banner = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const listBanner = useSelector(getListSelector)
  const listBannerLoading = useSelector(getListLoadingSelector)

  console.log("LIST BANNER", listBanner)
  const openModal = () => {
    setIsOpen(true)
  }

  React.useEffect(() => {
    dispatch(
      actions.getList({
        page: 1,
        limit: 3
      })
    )
  }, [])

  return (
    <div style={{ background: "white" }} className="main-banner saas-home">
      <Carousel className="blog-slides owl-carousel owl-theme" {...options}>
        {listBanner?.map((item) => (
          <div key={item?.id} className="col-lg-12 col-md-12">
            <div className="bg__slider">
              <img
                src={
                  item?.urlImage
                    ? item?.urlImage
                    : require("@src/assets/images/home-banner1.png").default
                }
                alt="blog-image"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner
