import React from "react";
import { Link } from "react-router-dom";
import "../sass/Footer/footer.css";
import git_hub from "../img/share/github/github-mark/github-mark.svg";
import linkedin from "../img/share/linkedIn2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="mt-12">
        <div className="navbar-footer">
          <ul>
            <li>
              <Link to="/" className="footer-cs-nav">
                Ho<span className="border-outline1">m</span>e
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-cs-nav">
                A<span className="border-outline1">b</span>out
              </Link>
            </li>
            <li>
              <Link to="/login" className="footer-cs-nav">
                Log<span className="border-outline1">i</span>n
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ul className="share">
        <li>
          <a href="https://github.com/Oracle4me">
            <img src={git_hub} alt="_blank" srcset="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nur-muhammad-kevin-453157292/">
            <img src={linkedin} alt="_blank" srcset="" />
          </a>
        </li>
      </ul>
      <div className="copyright">
        <p>&copy; 2024 Nur Muhammad Kevin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
