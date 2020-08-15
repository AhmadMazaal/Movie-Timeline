import React from "react";

export default function Pagination({ pages, nextPage, currentPage }) {
  let pageLinks = [];

  for (let i = 1; i <= pages + 1; i++) {
    let active = currentPage === i ? "active" : "";
    pageLinks.push(
      <li
        className={`waves-effect ${active}`}
        key={i}
        onClick={() => nextPage(i)}
      >
        <a href={`/Result`}>{i}</a>
      </li>
    );
  }

  return (
    <ul className="pagination-container">
      {currentPage > 1 ? (
        <li className="waves-effect" onClick={() => nextPage(currentPage - 1)}>
          <a href="/">Prev</a>
        </li>
      ) : (
        ""
      )}
      {pageLinks}
      {currentPage < pages + 1 ? (
        <li className="waves-effect" onClick={() => nextPage(currentPage + 1)}>
          <a href="/Result/2">Next</a>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
}
