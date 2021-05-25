import React from "react";

import Title from "../../../../components/Title";

import * as S from "./styled";

const UserList = ({ users }) => (
  <S.List>
    {users.length ? (
      <>
        <Title>User List</Title>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </>
    ) : (
      <Title>No users found</Title>
    )}
  </S.List>
);

export default UserList;
