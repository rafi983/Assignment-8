import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Author.css";

// Creating author component for rendering every single author

const Author = (props) => {
  const { image, name, type, age, country, book, bookPrice } = props.author;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="card-group">
      <div className="card d-flex justify-content-center align-items-center py-4 author rounded-3">
        <img src={image} className="card-img-top author-image" alt="..." />
        <div className="card-body">
          <h5 className="author-name">
            Author: <span>{name}</span>
          </h5>
          <h5 className="type">
            Type: <span>{type}</span>
          </h5>
          <h5 className="age">
            Age: <span>{age}</span>
          </h5>
          <h5 className="country">
            Country: <span>{country}</span>
          </h5>
          <h5 className="book">
            Book: <span>{book}</span>
          </h5>
          <h5 className="book-price">
            Book-price: <span>{bookPrice}$</span>
          </h5>
        </div>
        <div>
          <button
            className="btn btn-author"
            onClick={() => {
              props.handleAuthorName(props.author);
              props.handleAddToCart(props.author);
            }}
          >
            {cartIcon} add to cart
          </button>

          <div className="social-media mt-3">
            <i className="fab fa-facebook-square fs-1"></i>
            <i className="fab fa-instagram-square fs-1 ms-2"></i>
            <i className="fab fa-google-plus-square fs-1 ms-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
