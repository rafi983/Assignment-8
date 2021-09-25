import React, { useEffect, useState } from "react";
import "./Authors.css";
import Author from "../Author/Author";
import Cart from "../Cart/Cart";

const Authors = () => {
  // declaring states
  const [authors, setAuthors] = useState([]);
  const [authorName, setAuthorName] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./authors.JSON")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  // click handler fanction for selected autors for cart component
  const handleAuthorName = (authors) => {
    const newAuthor = [...authorName, authors.name];
    setAuthorName(newAuthor);
  };

  // cart handler function
  const handleAddToCart = (author) => {
    const newCart = [...cart, author];
    setCart(newCart);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 authors">
            {authors.map((author) => (
              <Author
                author={author}
                key={author.name}
                handleAuthorName={handleAuthorName}
                handleAddToCart={handleAddToCart}
              ></Author>
            ))}
          </div>

          <div className="col-lg-3 cart">
            <Cart authorname={authorName} cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
