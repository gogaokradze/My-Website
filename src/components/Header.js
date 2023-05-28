import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Projects from "./Projects";
import { Sun, Moon } from "./icons";
import AboutPage from "./AboutPage";

const Header = ({ darkTheme, setDarkTheme }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    if (window?.width) {
      if (window?.width > 768) {
        setIsNavVisible(false);
        document.body.style.overflow = "auto";
      }
    }
  }, [window?.width]);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    document.body.style.overflow = isNavVisible ? "auto" : "hidden";
  };

  const closeNav = () => {
    setIsNavVisible(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <div className="w-3/5 m-auto">
        <nav className="flex justify-between items-center h-52">
          <ul
            className={`md:flex md:items-center m-auto justify-start space-x-8 h-full text-lg flex-grow ${
              isNavVisible
                ? darkTheme
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
                : "hidden headerLand"
            } ${
              isNavVisible
                ? "fixed w-full h-screen z-40 flex flex-col justify-center items-center space-y-8 flex position-fixed top-0 left-0 "
                : ""
            }
              `}
          >
            <li className="pl-8">
              <Link
                to="/"
                className={`hover:text-blue-500 transition duration-300 ease-in-out`}
                onClick={closeNav}
              >
                <img
                  src="/images/profile.jpg"
                  alt="logo"
                  className={`h-8 w-8 overflow-hidden rounded-full hover:-translate-y-1 transition duration-300 ease-in-out`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`hover:text-blue-500 transition duration-300 ease-in-out`}
                onClick={closeNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`hover:text-blue-500 transition duration-300 ease-in-out`}
                onClick={closeNav}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-blue-500 transition duration-300 ease-in-out`}
                onClick={closeNav}
              >
                About
              </Link>
            </li>
            <li className="block md:hidden">
              <button onClick={() => setDarkTheme(!darkTheme)} className="mt-4">
                {darkTheme ? <Sun /> : <Moon />}
              </button>
            </li>
          </ul>
          <button
            className="pl-16 hidden md:block scale"
            onClick={() => setDarkTheme(!darkTheme)}
          >
            {darkTheme ? <Sun /> : <Moon />}
          </button>
          <div className="flex items-center gap-3 mobileLogoHover md:hidden fade-up">
            <Link
              to="/"
              className={`hover:text-blue-500 transition duration-300 ease-in-out`}
              onClick={closeNav}
            >
              <img
                src="/images/profile.jpg"
                alt="logo"
                className="h-8 w-8 overflow-hidden rounded-full"
              />
            </Link>
            <span>Goga Okradze</span>
          </div>
          <button className="md:hidden" onClick={toggleNav}>
            <div
              className={`hamburger relative ${isNavVisible ? "open" : ""} ${
                darkTheme ? "text-white" : "text-gray-800"
              } z-50 fade-up mobileNavBarBtn`}
            >
              {isNavVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L10.59 12l-5.3 5.29a1 1 0 0 0 1.42 1.42L12 13.41l5.29 5.3a1 1 0 0 0 1.42-1.42z" />
                </svg>
              ) : (
                "☰"
              )}
            </div>
          </button>
        </nav>
      </div>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/projects">
          <Projects darkTheme={darkTheme} />
        </Route>
        <Route path="/">
          <HomePage darkTheme={darkTheme} />
        </Route>
      </Switch>
    </div>
  );
};

export default Header;
