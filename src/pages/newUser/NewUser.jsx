import "./newUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "../../util/axios";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const formFields = { ...info };
    const formErrors = {};
    let formIsValid = true;

    if (!formFields["username"]) {
      formIsValid = false;
      formErrors["username"] = "Cannot be empty";
    }
    if (!formFields["fullname"]) {
      formIsValid = false;
      formErrors["fullname"] = "Cannot be empty";
    }
    if (!formFields["email"]) {
      formIsValid = false;
      formErrors["email"] = "Cannot be empty";
    }
    if (!formFields["phoneNumber"]) {
      formIsValid = false;
      formErrors["phoneNumber"] = "Cannot be empty";
    }
    if (!formFields["password"]) {
      formIsValid = false;
      formErrors["password"] = "Cannot be empty";
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        await axios.post("/auth/register", info);
        navigate("/users");
      } catch (error) {}
    } else {
      return;
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                  <span className="error">{errors[input.id]}</span>
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
