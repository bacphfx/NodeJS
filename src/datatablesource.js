export const userColumns = [
  { field: "_id", headerName: "ID", width: 300 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "fullname",
    headerName: "Fullname",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },

  {
    field: "phoneNumber",
    headerName: "Phone",
    width: 230,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 250,
  },
  {
    field: "city",
    headerName: "City",
    width: 200,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 250,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 350,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];

export const transactionColumns = [
  { field: "_id", headerName: "ID", width: 150 },
  {
    field: "user",
    headerName: "User",
    width: 150,
  },
  {
    field: "hotel",
    headerName: "Hotel",
    width: 300,
  },
  {
    field: "room",
    headerName: "Room",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    width: 250,
  },
  {
    field: "price",
    headerName: "price",
    width: 100,
  },
  {
    field: "payment",
    headerName: "Payment Method",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
  },
];
