import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "./reserve.css";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Reserve = ({ hotel, date }) => {
  const [dates, setDates] = useState(date);
  const { data, loading, error } = useFetch(`hotels/room/${hotel._id}`);
  const [selectedRooms, setSelectedRooms] = useState([]);

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

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  const handleClick = () => {};
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
              placeholder="Full name"
            ></input>
            <label>Your email:</label>
            <input className="input" type="email" placeholder="Email"></input>
            <label>Your phone number:</label>
            <input
              className="input"
              type="text"
              placeholder="Phone number"
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
          {data.map((item) => (
            <div className="item">
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
                      value={roomNumber._id}
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
        </div>
        <button onClick={handleClick} className="rButton">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Reserve;
