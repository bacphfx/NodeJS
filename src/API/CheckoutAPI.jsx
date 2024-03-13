import axiosClient from "./axiosClient";

let data;

const CheckoutAPI = {
  postCheckout: (query, token) => {
    const url = `/checkout${query}`;
    return axiosClient.post(url, data, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};

export default CheckoutAPI;
