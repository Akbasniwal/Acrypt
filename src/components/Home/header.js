import React from "react";

export default function Header() {
  return (
    <div className="header">
      <a
        href="https://akbasniwal.github.io"
        target="_blank"
        rel="noreferrer"
        className="logo"
      >
        <img src="favicon.ico" alt="logo" />K
        <span style={{ color: "blueviolet" }}>Basniwal</span>
      </a>
      <div className="title">
        <h3>Acrypt</h3>
      </div>
      <div></div>
    </div>
  );
}
