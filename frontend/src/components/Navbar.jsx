import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../sass/NavbarStyle/navbar.css";
import img from "./images";
const ListPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("Success");
  };
  return (
    <nav className="navbar">
      <div className="navbar_in">
        <Link to="#" className="">
          <span className="custom-logo">
            To D<span className="border-outline1">o</span> List
          </span>
        </Link>
        <div
          className={`menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}></div>
        <div className={`navbar-set ${isMenuOpen ? "nav_open" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={`custom-nav ${
                  location.pathname === "/" ? "active" : ""
                }`}>
                Ho<span className="border-outline1">m</span>e
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`custom-nav ${
                  location.pathname === "/about" ? "active" : ""
                }`}>
                A<span className="border-outline1">b</span>out
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={`custom-nav ${
                  location.pathname === "/login" ? "active" : ""
                }`}>
                Log<span className="border-outline1">i</span>n
              </Link>
            </li>
          </ul>
          <div className="star">
            <img src={img.star2} alt="star2" className="star1" />
            <img src={img.star2} alt="star2" className="star2" />
            <img src={img.star3} alt="star3" className="star3" />
            <img src={img.star4} alt="star4" className="star4" />
            <img src={img.star5} alt="star5" className="star5" />
            <img src={img.star6} alt="star6" className="star6" />
            <img src={img.star2} alt="star2" className="star7" />
          </div>
          <div className="media-social">
            <a href="https://github.com/Oracle4me">
              <img
                src={img.git_hub}
                alt="_blank"
                srcset=""
                className="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/nur-muhammad-kevin-453157292/">
              <img
                src={img.linked_in}
                alt="_blank"
                srcset=""
                className="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ListPage;

/* <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-1 px-16">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse mt-2">
          <span className="custom-logo self-center text-2xl font-extrabold whitespace-nowrap dark:text-white">
            To D<span className="border-outline1">o</span> List
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse mt-2">
          <div className="bg-custom">
            <a href="/" className="custom-nav text-md text-white ">
              Ho<span className="border-outline2">m</span>e
            </a>
          </div>
          <div className="bg-custom">
            <a href="/about" className="custom-nav text-md text-white ">
              A<span className="border-outline2">b</span>out
            </a>
          </div>

          <div className="bg-custom">
            <a href="/what?" className="custom-nav text-md text-white ">
              Wha<span className="border-outline2">t</span>?
            </a>
          </div>
          <div className="bg-custom">
            <a href="/login" className="custom-nav text-md text-white ">
              Log<span className="border-outline2">i</span>n
            </a>
          </div>
        </div>
      </div> */
