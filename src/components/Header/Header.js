import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container container text-center p-5 rounded">
      <h1>Authors guild</h1>
      <p>
        We are a club where renowned authors from different countries share
        their thoughts.Besides,we also purchase different books.
      </p>
      <h1>
        Total budget: 5000000${" "}
        <span className="budget-purpose">
          (for collecting books from other shops)
        </span>
      </h1>
    </div>
  );
};

export default Header;
