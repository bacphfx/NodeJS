import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const ProductDetail = ({ match }) => {
  const productId = match.params.productId;
  console.log(productId);
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/product/${productId}`).then((res) => {
      const data = res.data;
      console.log(data);
      setProduct(data);
    });
  });
  return (
    <div>
      <Header />
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetail;
