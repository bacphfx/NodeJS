import React from "react";

const AddProductForm = () => {
  return (
    <form className="product-form" action="/admin/add-product" method="post">
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>

      <div className="form-control">
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" name="imageUrl" id="imageUrl" />
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
