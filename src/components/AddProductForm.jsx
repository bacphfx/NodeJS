import React from "react";

const AddProductForm = () => {
  return (
    <form className="product-form" action="/add-product" method="post">
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>

      <div className="form-control">
        <label htmlFor="imgURL">Image URL</label>
        <input type="text" name="imgURL" id="imgURL" />
      </div>

      <div className="form-control">
        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="pice" />
      </div>

      <div className="form-control">
        <label htmlFor="description">Description</label>
        <input type="textarea" name="description" id="description" />
      </div>

      <button className="btn" type="submit">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
