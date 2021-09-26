import { faMoneyBill, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// Cart component for calculating carts items and selected authors

const Cart = (props) => {
  const personIcon = <FontAwesomeIcon icon={faUser} />;
  const moneyIcon = <FontAwesomeIcon icon={faMoneyBill} />;
  const { authorname, cart } = props;
  console.log(authorname);

  let totalQuantity = 0;
  let total = 0;
  for (const author of cart) {
    if (!author.quantity) {
      author.quantity = 1;
    }
    total = total + author.salary * author.quantity;
    totalQuantity = totalQuantity + author.quantity;
  }

  const singleAuthorName = authorname.map((writer, index) => (
    <li key={index}>{writer}</li>
  ));

  return (
    <div>
      <div className="mt-5">
        <h1 className="fs-3">
          {personIcon} Writers added:{" "}
          <span className="items-count">{totalQuantity}</span>
        </h1>
        <h1>
          {moneyIcon} Total cost: <br /> ${" "}
          <span className="value">{total}</span>
        </h1>
      </div>
      <h3>Selected Authors</h3>
      <ul className="author-list">{singleAuthorName}</ul>
    </div>
  );
};

export default Cart;
