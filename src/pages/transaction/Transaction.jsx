import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./transaction.scss";
import Table from "../../components/table/Table";
import { useLocation } from "react-router-dom";

const Transaction = ({ transactions }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Transactions List</div>
          <Table transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
