import * as React from "react";
import "../App.css";
import { AiFillApi } from "react-icons/ai";

export default function MovieNotFound() {
  return (
    <div>
      <h1 style={{ fontSize: "8rem", margin: "-1.5rem 0" }}>404 Error!</h1>
      <h2 className="fail-response">
        Page Not Found <AiFillApi size="2.5rem" />
      </h2>
      <a href="/" className="entity-link">
        <span className="entity-icon">&laquo;</span>Back to homepage
      </a>
    </div>
  );
}
