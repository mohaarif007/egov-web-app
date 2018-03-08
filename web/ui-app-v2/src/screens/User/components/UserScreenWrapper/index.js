import React, { Component } from "react";
import { withRouter } from "react-router";
import { Image } from "../../../../components";
import logoMuncipal from "../../../../assets/images/PB logo.png";
import logoMseva from "../../../../assets/images/Mseva logo.png";
import "./index.css";

const UserScreensWrapper = ({ children, className = "" }) => {
  return (
    <div>
      <div className={`${className} user-screens-wrapper col-xs-12 col-lg-6 col-sm-6 col-md-6 col-lg-offset-3 col-sm-offset-3 col-md-offset-3`}>
        <div className="row">
          <div className="imageContainer" />
          <div className="logo-container">
            <Image className="logo" circular={true} source={`${logoMuncipal}`} />
          </div>
          {children}
        </div>
      </div>
      <div className="bottom-logo">
        <Image className="mseva-logo" source={`${logoMseva}`} />
      </div>
    </div>
  );
};

export default UserScreensWrapper;
