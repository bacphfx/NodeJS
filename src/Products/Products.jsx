import React, { useEffect, useState } from "react";
import queryString from "query-string";
import ProductAPI from "../API/ProductAPI";
import Pagination from "./Component/Pagination";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [temp, setTemp] = useState([]);

  const onChangeText = (e) => {
    const value = e.target.value;
    if (!value) {
      setProducts(temp);
      return;
    }
    const searchProducts = temp.filter(
      (item) => item.name.toUpperCase().indexOf(value.toUpperCase()) !== -1
    );
    setProducts(searchProducts);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      const { products } = await ProductAPI.getAPI();

      setProducts(products);
      setTemp(products);
    };
    fetchAllData();
  }, []);

  return (
    <div>
      <Header />

      <Menu />

      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">
                Basic Initialisation
              </h4>
              <div className="d-flex align-items-center">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb m-0 p-0">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-muted">
                        Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item text-muted active"
                      aria-current="page"
                    >
                      Table
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Products</h4>
                  <div className="d-flex justify-content-between">
                    <input
                      className="form-control w-25"
                      onChange={onChangeText}
                      type="text"
                      placeholder="Enter Search!"
                    />
                    <a
                      href={"/products/view-edit"}
                      style={{ cursor: "pointer", color: "white" }}
                      className="btn btn-success"
                    >
                      Create Product
                    </a>
                  </div>

                  <br />
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered no-wrap">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Image</th>
                          <th>Category</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products &&
                          products.map((value) => (
                            <tr key={value._id}>
                              <td>{value._id}</td>
                              <td>{value.name}</td>
                              <td>
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(value.price)}
                              </td>
                              <td>
                                <img
                                  src={value.img1}
                                  style={{ height: "60px", width: "60px" }}
                                  alt=""
                                />
                              </td>
                              <td>{value.category}</td>
                              <td>
                                <a
                                  style={{ cursor: "pointer", color: "white" }}
                                  className="btn btn-success"
                                >
                                  Update
                                </a>
                                <span> </span>
                                <a
                                  style={{ cursor: "pointer", color: "white" }}
                                  className="btn btn-danger"
                                >
                                  Delete
                                </a>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer text-center text-muted"></footer>
      </div>
    </div>
  );
}

export default Products;
