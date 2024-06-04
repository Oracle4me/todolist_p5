import React from "react";
import PropTypes from "prop-types";
import "../sass/CustomAlert/CustomAlert.css";
import thief from "../img/alert-icon/alibaba.png";
const Alert = ({ text1, text2 }) => {
  return (
    <div className="bg-cs-zip">
      <div className="bg-skew-right">
        <div className="title-wrap-cs">
          <span className="text-alert">Congratulation</span>
        </div>
        <div className="title-wrap-cs cs-wrap">
          <span className="text-alert">Your Task Has Been Add</span>
        </div>
        <img className="t-icon" src={thief} alt="" />
      </div>
    </div>
  );
};

Alert.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
};

Alert.defaultProps = {
  text1: "Welcome Back!",
  text2: "You have successfully logged in",
};

export default Alert;
