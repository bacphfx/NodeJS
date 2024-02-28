import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./transaction.css";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Transaction = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState();
  const { user } = useContext(AuthContext);
  const { data, error, loading } = useFetch(`/transactions/${user._id}`);

  useEffect(() => {
    setTransactions(data);
  }, [data]);

  const HotelName = ({ hotelId }) => {
    const [name, setName] = useState();
    const { data } = useFetch(`/hotels/find/${hotelId}`);
    useEffect(() => {
      setName(data?.title);
    }, [data]);

    return <span>{name}</span>;
  };
  console.log(transactions);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <h2>Your Transactions:</h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Hotel</th>
              <th>Room</th>
              <th>Date</th>
              <th>Price</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>
                    <HotelName hotelId={val?.hotel} />
                  </td>
                  <td>{val.room.join(", ")}</td>
                  <td>
                    {val.dateStart.slice(0, 10).replaceAll("-", "/")} -{" "}
                    {val.dateEnd.slice(0, 10).replaceAll("-", "/")}
                  </td>
                  <td>{val.price}</td>
                  <td>{val.payment}</td>
                  <td>{val.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <MailList />
      <Footer />
    </div>
  );
};

export default Transaction;
