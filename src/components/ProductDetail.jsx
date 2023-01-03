import React from "react";

const ProductDetail = ({ product }) => {
  console.log(product);
  return (
    <main class="centered">
      <h1>{product.title}</h1>
      <hr />
      <div>
        <img src={product.imageUrl} alt={product.title} height="300px" />
      </div>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
    </main>
  );
};

export default ProductDetail;
