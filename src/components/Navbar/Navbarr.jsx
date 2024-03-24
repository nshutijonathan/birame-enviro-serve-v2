import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-scroll';

import './styles.css';
const Navbarr = () => {
  const [scroll, setScrolll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrolll(true);
    } else {
      setScrolll(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      <header
        className={
          scroll
            ? 'bg-white header border-b border-gray-900 fixed left-0 top-0 z-50 md:py-10'
            : 'header border-b border-gray-900 left-0 top-0 fixed z-50 md:py-10'
        }
      >
        <a href="" className="logo">
          {scroll && (
            <img
              src="../public/ProjectsFiles/logo-compressed.png"
              alt="image not found"
              className="w-30 h-12"
            ></img>
          )}
        </a>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <RiMenu2Line id="menu" />
          <FaTimes id="close" />
        </label>
        <nav className="navbar">
          <Link to="aboutus" smooth={true} duration={1000}>
            {' '}
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-xl font-semibold'
                  : 'text-black lg:text-white  text-xl '
              }
            >
              ABOUT US
            </a>
          </Link>
          <Link to="whatwedo" smooth={true} duration={true}>
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-xl font-semibold'
                  : 'text-black lg:text-white  text-xl'
              }
            >
              WHAT WE DO
            </a>
          </Link>
          <Link to="ourprojects" smooth={true} duration={true}>
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-xl font-semibold'
                  : 'text-black lg:text-white  text-xl'
              }
            >
              PROJECTS
            </a>
          </Link>
          <Link to="team" smooth={true} duration={true}>
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-xl font-semibold'
                  : 'text-black lg:text-white  text-xl'
              }
            >
              TEAM
            </a>
          </Link>
          <Link to="Resource" smooth={true} duration={true}>
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-xl font-semibold'
                  : 'text-black lg:text-white  text-xl'
              }
            >
              RESOURCES
            </a>
          </Link>
          <Link to="donate" smooth={true} duration={true}>
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-xl font-semibold'
                  : 'text-black pb-3 lg:text-white  text-xl'
              }
            >
              DONATE
            </a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbarr;
