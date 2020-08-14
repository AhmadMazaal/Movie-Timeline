import React from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import colors from "../constants/colors";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination-container">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <NavLink
              activeStyle={{ color: colors.warning }}
              onClick={() => {
                paginate(number);
              }}
              to="/"
              className="page-link"
              style={{ textDecoration: "none" }}
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
