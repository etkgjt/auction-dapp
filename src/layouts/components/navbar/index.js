import "./index.scss";
import "./responsive.scss";

import React, { useState, useEffect } from "react";

/*Hooks*/
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";

/*Navigation*/
import navigation from "@src/navigation";

/*Redux*/
import * as actionsCommon from "@store/common/actions";
import { getCodeLanguage } from "@store/common/selectors";
import { getUserData } from "../../../store/user/selector";
import { loginSuccessSelector } from "../../../Modules/Authenticate/store/auth/selectors";

/*COMPONENT*/
import {
  UserIcon,
  UserPointerWrapper,
  DoneProgress,
  PendingProgress,
} from "./icon";
import DropdownCustom from "./Dropdown";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const PROGRESS_LENGTH = 250;

const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();

  /*Selectors*/
  const lang = useSelector((state) => getCodeLanguage(state));
  const userData = useSelector(getUserData);
  const isLogin = useSelector(loginSuccessSelector);

  /*State*/
  const [collapsed, setCollapsed] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const layOutCls = "";
  const logo = require("@src/assets/images/logo-gif.gif").default;

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      setIsMounted(true);
    };
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);
  const percent =
    userData?.levelProgress * 100 > 100 ? 100 : userData?.levelProgress * 100;
  const PROGRES_DONE_LENGTH = parseInt((250 * percent) / 100);

  return (
    <header id="header" className="header-inner">
      <div id="navbar" className={`crake-nav ${layOutCls}`}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/">
              <a className="navbar-brand">
                <img src={logo} alt="logo" />
              </a>
            </Link>

            <div className="ms-auto others-option">
              {!isLogin ? null : (
                <div className="nav-user-progress-container">
                  <div className="progress-info-wrapper">
                    <span>
                      {`Cấp ${userData?.inviteUserCount || 0}`}&nbsp;
                      {userData?.level?.name ? (
                        <span className="sub-info">{`| ${userData?.level?.name}`}</span>
                      ) : null}
                    </span>
                    <div className="progress-bar-wrapper">
                      <div className="done-progress-wrapper">
                        <DoneProgress
                          width={
                            isNaN(PROGRES_DONE_LENGTH) ? 0 : PROGRES_DONE_LENGTH
                          }
                        />
                      </div>
                      <PendingProgress width={PROGRESS_LENGTH} />
                    </div>
                  </div>
                  <div className="user-point-wrapper">
                    <UserPointerWrapper />
                    <span>{`${userData?.totalVoicoin || 0}k`}</span>
                  </div>
                </div>
              )}

              <div className={"nav__select" + (isLogin ? " login" : "")}>
                {isLogin ? null : (
                  <span
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="nav__select-text"
                  >
                    Đăng ký / Đăng nhập
                  </span>
                )}

                <Dropdown
                  isOpen={isDropdownOpen}
                  toggle={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <DropdownToggle>
                    <div
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="user-icon-wrapper"
                    >
                      <UserIcon />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>
                      <DropdownCustom
                        setIsDropdownOpen={setIsDropdownOpen}
                        isLogin={isLogin}
                        isDropdownOpen={isDropdownOpen}
                      />
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
