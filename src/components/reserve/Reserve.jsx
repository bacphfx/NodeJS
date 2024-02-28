import React, { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import "./reserve.css";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Reserve = ({ hotel, date }) => {
  const navigate = useNavigate();
  const [dates, setDates] = useState(date);
  const { data, loading, error } = useFetch(`hotels/room/${hotel._id}`);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [method, setMethod] = useState("Cash");
  const { user } = useContext(AuthContext);
  console.log(selectedRooms.map((i) => i.number));

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const [transaction, setTransaction] = useState({
    user: user?.username,
    hotel: hotel._id,
  });

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = JSON.parse(e.target.value);

    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleChange = (e) => {
    setMethod(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await Promise.all(
        selectedRooms.map((i) => {
          axios.put(`http://localhost:5000/api/rooms/available/${i._id}`, {
            dates: allDates,
          });
        })
      );

      transaction.room = selectedRooms.map((i) => i.number);
      transaction.dateStart = dates[0].startDate;
      transaction.dateEnd = dates[0].endDate;
      transaction.price =
        hotel.cheapestPrice * selectedRooms.length * allDates.length;
      transaction.payment = method;

      const res = await axios.post(
        `http://localhost:5000/api/transactions/${user._id}`,
        transaction
      );
      navigate("/transaction");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="reserve">
      <div className="top">
        <div className="datePicker">
          <h2>Dates</h2>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            minDate={new Date()}
          />
        </div>
        <div className="userInfo">
          <h2>Reserve Info</h2>
          <form className="form">
            <label>Your full name:</label>
            <input
              className="input"
              type="text"
              placeholder={user.fullname}
            ></input>
            <label>Your email:</label>
            <input
              className="input"
              type="email"
              placeholder={user.email}
            ></input>
            <label>Your phone number:</label>
            <input
              className="input"
              type="text"
              placeholder={user.phoneNumber}
            ></input>
            <label>Your identity card number:</label>
            <input
              className="input"
              type="text"
              placeholder="Card number"
            ></input>
          </form>
        </div>
      </div>
      <div className="middle">
        <h2>Select Rooms</h2>
        <div className="all-rooms">
          {data.map((item, key) => (
            <div className="item" key={key}>
              <div className="rItem">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <h4>Max people: {item.maxPeople}</h4>
                <h4>${item.price}</h4>
              </div>
              <div className="lItem">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="room">
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={JSON.stringify(roomNumber)}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom">
        <div className="bill">
          <h2>
            Total Bill: $
            {hotel.cheapestPrice * selectedRooms.length * allDates.length}
          </h2>
          <label>Select Payment Method: </label>
          <select onChange={handleChange}>
            <option>Cash</option>
            <option>Credit Card</option>
          </select>
        </div>
        <button onClick={handleSubmit} className="rButton">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Reserve;
