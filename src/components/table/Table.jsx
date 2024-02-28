import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const [transactions, setTransactions] = useState([]);
  const { data, error, loading } = useFetch(`/transactions`);

  useEffect(() => {
    setTransactions(data);
  }, [data]);
  console.log(transactions);

  const HotelName = ({ hotelId }) => {
    const [name, setName] = useState();
    const { data } = useFetch(`/hotels/find/${hotelId}`);
    useEffect(() => {
      setName(data?.title);
    }, [data]);

    return <span>{name}</span>;
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Hotel</TableCell>
            <TableCell className="tableCell">Room</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row._id}</TableCell>
              <TableCell className="tableCell">{row.user}</TableCell>
              <TableCell className="tableCell">
                <HotelName hotelId={row.hotel} />
              </TableCell>
              <TableCell className="tableCell">{row.room.join(", ")}</TableCell>
              <TableCell className="tableCell">
                {row.dateStart.slice(0, 10).replaceAll("-", "/")} -{" "}
                {row.dateEnd.slice(0, 10).replaceAll("-", "/")}
              </TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.payment}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
