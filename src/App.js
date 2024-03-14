import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import Header from "./Header/Header";

import Menu from "./Menu/Menu";
import Products from "./Products/Products";

import Login from "./Login/Login";

import { AuthContextProvider } from "./Context/AuthContext";

import { Redirect } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <div
            id="main-wrapper"
            data-theme="light"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
            data-boxed-layout="full"
          >
            <Switch>
              <Route exact path="/home" component={Products} />
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          </div>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
