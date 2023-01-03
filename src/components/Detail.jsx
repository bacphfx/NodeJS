import React from "react";

const Detail = ({ product }) => {
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
      <form action="/cart" method="post">
        <button class="btn" type="submit">
          Add to cart
        </button>
        <input type="hidden" name="productId" value={product.id} />
      </form>
    </main>
  );
};

export default Detail;
