import React, { useEffect, useState } from "react";
import axios from "axios";

const RenderProduct = ({ product }) => {
  return (
    <article className="card product-item">
      <header className="card__header">
        <h1 className="product__title">{product.title}</h1>
      </header>
      <div className="card__image">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="card__content">
        <h2 className="product__price">${product.price}</h2>
        <p className="product__description">{product.description}</p>
      </div>
      <div className="card__actions">
        <a href="/cart" className="btn">
          Add to cart
        </a>
      </div>
    </article>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    axios
      .get("http://localhost:5000")
      .then((res) => {
        const data = res.data;
        setProducts(data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="grid">
      {products.map((product) => {
        return <RenderProduct product={product} />;
      })}
    </div>
  );
};

export default Products;
