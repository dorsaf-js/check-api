import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
      .then((res) => {
        setUsers(res);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="row">
      {!isLoading ? (
        users.map((user, index) => <User user={user} key={index} />)
      ) : (
        <Spinner animation="border" role="status" style={{marginLeft:'50%',marginTop:'300px'}} >
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Users;
