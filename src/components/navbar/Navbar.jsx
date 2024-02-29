import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const logout = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking Website</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span>{user.username}</span>
            <Link to="/transaction">
              <button className="navButton">Transaction</button>
            </Link>
            <button className="navButton" onClick={logout}>
              Log Out
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
