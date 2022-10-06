import React from "react";

function Home() {
  return (
    <form action="/" method="POST">
      <input type="text" name="user" />
      <button type="submit">Add User</button>
    </form>
  );
}

export default Home;
