import React from "react";

const Header = () => {
  return (
    <div className="main-header">
      <nav className="main-header__nav">
        <ul className="main-header__item-list">
          <li className="main-header__item">
            <a href="/">Shop</a>
          </li>
          <li className="main-header__item">
            <a href="/products">Products</a>
          </li>
          <li className="main-header__item">
            <a href="/cart">Cart</a>
          </li>
          <li className="main-header__item">
            <a href="/order">Oder</a>
          </li>
          <li className="main-header__item">
            <a href="/admin/add-product">Add product</a>
          </li>
          <li className="main-header__item">
            <a href="/admin/products">Admin Products</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
