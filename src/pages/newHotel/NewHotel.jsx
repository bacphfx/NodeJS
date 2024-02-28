import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "../../util/axios";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const NewHotel = ({ inputs, title }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ featured: "false" });
  const [rooms, setRooms] = useState([]);
  const [errors, setErrors] = useState({});
  const { data, loading, error } = useFetch("/rooms");

  const handleValidation = () => {
    const formFields = { ...info };
    const formErrors = {};
    let formIsValid = true;

    if (!formFields["name"]) {
      formIsValid = false;
      formErrors["name"] = "Cannot be empty";
    }
    if (!formFields["type"]) {
      formIsValid = false;
      formErrors["type"] = "Cannot be empty";
    }
    if (!formFields["city"]) {
      formIsValid = false;
      formErrors["city"] = "Cannot be empty";
    }
    if (!formFields["address"]) {
      formIsValid = false;
      formErrors["address"] = "Cannot be empty";
    }
    if (!formFields["distance"]) {
      formIsValid = false;
      formErrors["distance"] = "Cannot be empty";
    }
    if (!formFields["title"]) {
      formIsValid = false;
      formErrors["title"] = "Cannot be empty";
    }
    if (!formFields["desc"]) {
      formIsValid = false;
      formErrors["desc"] = "Cannot be empty";
    }
    if (!formFields["cheapestPrice"]) {
      formIsValid = false;
      formErrors["cheapestPrice"] = "Cannot be empty";
    }
    if (!formFields["photos"]) {
      formIsValid = false;
      formErrors["photos"] = "Cannot be empty";
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSelect = (e) => {
    const value = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setRooms(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        await axios.post("/hotels/", { ...info, rooms: rooms });
        navigate("/hotels");
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
                  <label>
                    {input.label}
                    <span className="required">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                  <span className="error">{errors[input.id]}</span>
                </div>
              ))}
              <div className="formInput">
                <label>
                  Images<span className="required">*</span>
                </label>
                <textarea id="photos" onChange={handleChange} />
                <span className="error">{errors["photos"]}</span>
              </div>
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>
                  Rooms<span className="required">*</span>
                </label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </div>
            </form>
            <button onClick={handleClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
