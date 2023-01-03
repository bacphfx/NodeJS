import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import "./css/main.css";
import "./css/product.css";
import "./css/forms.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin/add-product" component={AddProduct} />
        {/* <Route path="/products/:productId" component={ProductDetail} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
