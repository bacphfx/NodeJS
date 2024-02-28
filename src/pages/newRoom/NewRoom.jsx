import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "../../util/axios";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const NewRoom = ({ inputs, title }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState(undefined);
  const { data, loading, error } = useFetch("/hotels");
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const formFields = { ...info };
    const formErrors = {};
    let formIsValid = true;

    if (!formFields["title"]) {
      formIsValid = false;
      formErrors["title"] = "Cannot be empty";
    }
    if (!formFields["description"]) {
      formIsValid = false;
      formErrors["description"] = "Cannot be empty";
    }
    if (!formFields["price"]) {
      formIsValid = false;
      formErrors["price"] = "Cannot be empty";
    }
    if (!formFields["maxPeople"]) {
      formIsValid = false;
      formErrors["maxPeople"] = "Cannot be empty";
    }

    if (!rooms) {
      formIsValid = false;
      formErrors["rooms"] = "Cannot be empty";
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
      const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
      try {
        await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
        navigate("/rooms");
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
              <div className="formInput">
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="give comma between room numbers."
                />
                <span className="error">{errors["rooms"]}</span>
              </div>
              <div className="formInput">
                <label>Choose a hotel</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.title}
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

export default NewRoom;
