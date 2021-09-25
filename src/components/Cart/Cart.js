import React from "react";

import { faBook, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Cart component for calculating carts items and selected authors

const Cart = (props) => {
  const bookIcon = <FontAwesomeIcon icon={faBook} />;
  const moneyIcon = <FontAwesomeIcon icon={faMoneyBill} />;
  const { authorname, cart } = props;

  let totalQuantity = 0;
  let total = 0;
  for (const book of cart) {
    if (!book.quantity) {
      book.quantity = 1;
    }
    total = total + book.bookPrice * book.quantity;
    totalQuantity = totalQuantity + book.quantity;
  }

  const singleAuthorName = authorname.map((writer, index) => (
    <li key={index}>{writer}</li>
  ));
  return (
    <div>
      <div className="mt-5">
        <h1 className="fs-3">
          {bookIcon} Books added:{" "}
          <span className="items-count">{totalQuantity}</span>
        </h1>
        <h1>
          {moneyIcon} Total cost: <br /> ${" "}
          <span className="value">{total.toFixed(2)}</span>
        </h1>
      </div>
      <h3>Selected Authors</h3>
      <ul className="author-list">{singleAuthorName}</ul>
    </div>
  );
};

export default Cart;
