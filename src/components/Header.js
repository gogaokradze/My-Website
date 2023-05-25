import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Projects from "./Projects";
import { Sun, Moon } from "./icons";
import AboutPage from "./AboutPage";

const Header = ({ darkTheme, setDarkTheme }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    document.body.style.overflow = isNavVisible ? "auto" : "hidden";
  };

  const closeNav = () => {
    setIsNavVisible(false);
    document.body.style.overflow = "auto";
  };

  return (
    <Router>
      <div>
        <div className="w-3/5 m-auto">
          <nav className="flex justify-between items-center h-52">
            <ul
              className={`md:flex md:items-center m-auto justify-start space-x-8 h-full text-lg flex-grow ${
                isNavVisible
                  ? "fixed w-full h-screen z-40 flex flex-col justify-center items-center space-y-8 "
                  : "hidden"
              } ${
                isNavVisible
                  ? darkTheme
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                  : ""
              } position-fixed top-0 left-0 sm:hidden mobileNavBar gap-10`}
            >
              <li data-aos="fade-up">
                <Link
                  to="/"
                  className={`hover:text-blue-500 transition duration-300 ease-in-out`}
                  onClick={closeNav}
                >
                  <img
                    src="/images/profile.jpg"
                    alt="logo"
                    className="h-8 w-8 overflow-hidden rounded-full hover:-translate-y-1 transition duration-300 ease-in-out"
                  />
                </Link>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <Link
                  to="/"
                  className={`hover:text-blue-500 transition duration-300 ease-in-out`}
                  onClick={closeNav}
                >
                  Home
                </Link>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <Link
                  to="/projects"
                  className={`hover:text-blue-500 transition duration-300 ease-in-out`}
                  onClick={closeNav}
                >
                  Projects
                </Link>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
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
              // className="pl-16 hidden sm:hidden md:hidden lg:block xl:block"
              className="pl-16 hidden md:block"
              onClick={() => setDarkTheme(!darkTheme)}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {darkTheme ? <Sun /> : <Moon />}
            </button>
            <div
              data-aos="fade-up"
              className="flex items-center gap-3 mobileLogoHover md:hidden"
            >
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
                } z-50`}
                data-aos="fade-up"
              >
                {isNavVisible ? "X" : "☰"}
              </div>
            </button>
          </nav>
        </div>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Header;
