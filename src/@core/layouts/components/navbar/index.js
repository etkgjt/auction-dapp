import './index.scss';

import React, { useState, useEffect } from 'react';

/*Hooks*/
import { useTranslation } from 'react-i18next';

/*Components*/
import { Link } from 'react-router-dom';
import SideDrawer from '@components/Layouts/SideDrawer';
import SearchForm from '@components/Layouts/SearchForm';

import navigation from '@src/navigation/sticky';

const Navbar = ({ router = {}, products = [] }) => {
  const { t } = useTranslation();

  const [drawer, setDrawer] = useState(false);
  const [searchForm, setSearchForm] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const { pathname } = router;

  const layOutCls = '';
  const logo = require('@src/assets/images/logo.png').default;
  if (pathname === '/digital-marketing') {
    layOutCls = 'marketing-navbar';
    logo = require('@src/assets/images/logo2.png').default;
  }

  const classOne = collapsed
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show';
  const classTwo = collapsed
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleSearchForm = () => {
    setSearchForm(!searchForm);
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

  return (
    <>
      <header id="header">
        <div id="navbar" className={`crake-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link to="/saas">
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
                <ul className="navbar-nav nav ms-auto">
                  {navigation &&
                    navigation.length &&
                    navigation.map((item) => (
                      <li className="nav-item" key={item.id}>
                        <Link className="nav-link" to={item.to}>
                          {item.titleI18n ? t(item.titleI18n) : item.title}
                        </Link>
                        {item.submenu &&
                          item.submenu.length &&
                          item.submenu.map((sub) => {
                            <ul className="dropdown_menu" key={sub.id}>
                              <li>
                                <Link activeClassName="active" to={sub.to}>
                                  <a>
                                    {sub.titleI18n
                                      ? t(sub.titleI18n)
                                      : sub.title}
                                  </a>
                                </Link>
                              </li>
                            </ul>;
                          })}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="ms-auto others-option">
                <ul className="navbar-nav">
                  <li className="header-search-box">
                    <Link activeClassName="active" href="/#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          handleSearchForm();
                        }}
                        title="Search"
                      >
                        <i className="icofont-search-2"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {searchForm ? <SearchForm onClick={handleSearchForm} /> : ''}
    </>
  );
};

export default Navbar;
