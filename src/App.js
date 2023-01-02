import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import "./css/main.css";
import "./css/product.css";
import "./css/forms.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-product" component={AddProduct} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
