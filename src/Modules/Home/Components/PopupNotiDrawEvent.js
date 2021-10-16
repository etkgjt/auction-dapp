import React from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";

import { CircleCloseButton, PopupNotiWrapper } from "../../../assets/svg";

import SlideInModal from "../../../components/SlideInModal";
import VoiImg from "../assets/images/voi.png";
import popupEvent from "../assets/popup-event.png";
import { readNotify } from "@store/common/actions";

const { innerWidth: width, innerHeight: height } = window;
const PopupNotiDraw = ({ data }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });

  const getModalWidth = () => {
    return !isMobile && !isTablet
      ? width * 0.3
      : isMobile
      ? width * 0.9
      : width * 0.6;
  };
  const getModalHeight = () => {
    return !isMobile && !isTablet
      ? height * 0.5
      : isMobile
      ? height * 0.4
      : height * 0.4;
  };
  return (
    <div className="popup-noti-draw-container">
      <img src={popupEvent} className="popup-event-image" />
      <div
        className="popup-noti-draw-close-btn"
        onClick={() => {
          SlideInModal.hide();
        }}
      >
        <CircleCloseButton />
      </div>

      <div className="popup-noti-draw-content-wrapper">
        <h1 className="content-title">{data?.title}</h1>
        <p className="content-subtitle">{data?.content}</p>
      </div>
    </div>
  );
};
export default PopupNotiDraw;
