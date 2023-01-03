import Shop from "./pages/Shop";
import AddProduct from "./pages/AddProduct";
import "./css/main.css";
import "./css/product.css";
import "./css/forms.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
