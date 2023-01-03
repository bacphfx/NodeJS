import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Detail from "../components/Detail";

const ProductDetail = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${productId}`)
      .then((res) => {
        const data = res.data;
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div>
      <Header />
      <Detail product={product} />
    </div>
  );
};

export default ProductDetail;
