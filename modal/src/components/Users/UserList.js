import React from "react";
import Card from "../UI/Card";
import styled from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styled.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name}({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
