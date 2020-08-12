import * as React from "react";
import "../App.css";
import { RiMovie2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header-container">
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <h1 className="title">
          Movie <span className="title-2">Timeline </span>
          <RiMovie2Line size="5rem" />
        </h1>
      </Link>
    </div>
  );
}
