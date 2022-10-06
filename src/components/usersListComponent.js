import React from "react";

class Users extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          users: json,
        });
      });
  }
  render() {
    const { users } = this.state;
    console.log(users);
    if (users.length > 0)
      return (
        <div>
          <h1> Users</h1>
          {users.map((user) => (
            <ul>
              <li>{user.user}</li>
            </ul>
          ))}
        </div>
      );

    return (
      <div>
        <h1> Users </h1>
        <h2>No User Found!</h2>
      </div>
    );
  }
}

export default Users;
