import React from "react";
import "./loader.scss";

export default function Loader() {
  return (
    <div className="loader">
      <div className="cbox">
        <div className="ring" style={{ animationDelay: "-1.3s" }}></div>
        <div className="ring" style={{ animationDelay: "-2.6s" }}></div>
        <div className="ring" style={{ animationDelay: "-3.9s" }}></div>
      </div>
    </div>
  );
}
