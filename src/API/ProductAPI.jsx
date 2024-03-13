import axiosClient from "./axiosClient";
const token = localStorage.getItem("token");

const ProductAPI = {
  getAPI: (token) => {
    const url = "/products";
    return axiosClient.get(url);
  },

  getCategory: (query) => {
    const url = `/products/category${query}`;
    return axiosClient.get(url);
  },

  getRelative: (id) => {
    const url = `/products/relative/${id}`;
    return axiosClient.get(url);
  },

  getDetail: (id, token) => {
    const url = `/products/${id}`;
    return axiosClient.get(url, {
      headers: { Authorization: "Bearer " + token },
    });
  },

  getPagination: (query) => {
    const url = `/products/pagination${query}`;
    return axiosClient.get(url);
  },
};

export default ProductAPI;
