import axiosClient from "./axiosClient";
let data;

const CartAPI = {
  getCarts: (query, token) => {
    const url = `/carts${query}`;
    return axiosClient.get(url, {
      headers: { Authorization: "Bearer " + token },
    });
  },

  postAddToCart: (query, token) => {
    console.log(token);
    const url = `/carts${query}`;
    return axiosClient.post(url, data, {
      headers: { Authorization: "Bearer " + token },
    });
  },

  deleteToCart: (query, token) => {
    const url = `/carts/delete${query}`;
    return axiosClient.delete(url, {
      headers: { Authorization: "Bearer " + token },
    });
  },

  putToCart: (query, token) => {
    const url = `/carts/update${query}`;
    return axiosClient.put(url, data, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};

export default CartAPI;
