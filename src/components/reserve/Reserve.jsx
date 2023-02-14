import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "./reserve.css";

const Reserve = ({ hotel }) => {
  console.log(hotel);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
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
        <div className="selectRoom">{hotel.name}</div>
      </div>
      <div className="bottom">
        <div className="bill">Bill</div>
      </div>
    </div>
  );
};

export default Reserve;
