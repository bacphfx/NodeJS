import axiosClient from "./axiosClient";

const CheckoutAPI = {
  postCheckout: (query) => {
    const url = `/checkout${query}`;
    return axiosClient.post(url);
  },
};

export default CheckoutAPI;
