import './index.scss';

import React, { useState, useEffect } from 'react';

/*Hooks*/
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

/*Navigation*/
import navigation from '@src/navigation';

/*Redux*/
import * as actionsCommon from '@store/common/actions';
import { getCodeLanguage } from '@store/common/selectors';

const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { url } = useRouteMatch();

  /*Selectors*/
  const lang = useSelector((state) => getCodeLanguage(state));

  /*State*/
  const [collapsed, setCollapsed] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const layOutCls = '';
  const logo = require('@src/assets/images/logo.png').default;

  const classOne = collapsed
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show';
  const classTwo = collapsed
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
    return () => {
      setIsMounted(true);
    };
  }, []);

  const handleOnSubmit = (e) => {
    dispatch(actionsCommon.setLanguage(e.target.value));
  };

  return (
    <header id="header">
      <div id="navbar" className={`crake-nav ${layOutCls}`}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/">
              <a className="navbar-brand">
                <img src={logo} alt="logo" />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              {navigation && navigation.length ? (
                <ul className="navbar-nav nav ms-auto">
                  {navigation.map((item) => (
                    <li
                      className={`nav-item ${item.to === url ? 'active' : ''}`}
                      key={item.id}
                    >
                      <Link className="nav-link" to={item.to}>
                        {item.titleI18n ? t(item.titleI18n) : item.title}
                      </Link>
                      {item.submenu && item.submenu.length ? (
                        <ul className="dropdown_menu">
                          {item.submenu.map((sub, index) => (
                            <li key={sub.id || `sub-${index}`}>
                              <Link to={sub.to}>
                                {sub.titleI18n ? t(sub.titleI18n) : sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="ms-auto others-option">
              <ul className="nav__select">
                <li>
                  <form onChange={handleOnSubmit}>
                    <div className="select-box">
                      <select
                        className="selectpicker form-select"
                        defaultValue={lang}
                        id="lang"
                      >
                        <option value="vi" className="vietnam__flag">
                          🇻🇳
                        </option>
                        <option value="en">🇺🇸</option>
                      </select>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
