import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { actions as userActions } from "../../redux/user";

import LoadingSpinner from "../../components/LoadingSpinner";

import UserList from "./components/UserList";
import SearchInput from "./components/SearchInput";

import * as S from "./styled";

let delayTimer = null;

const UserPage = () => {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const dispatch = useDispatch();
  const { userList, loading } = useSelector(({ user }) => ({
    userList: user.userList,
    loading: user.loadingUsers,
  }));

  const [filteredUserList, setFilteredUserList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(userActions.getUsersRequest());
  }, [dispatch]);

  useEffect(() => {
    const searchString = query.get("search");

    if (searchString) {
      filterUsersByName(searchString);
      setSearchValue(searchString);
    } else {
      setFilteredUserList(userList);
    }
  }, [userList]);

  const filterUsersByName = (name) => {
    const filteredUsers = userList.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );

    setFilteredUserList(filteredUsers);
  };

  const onSearchChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);

    if (value) {
      history.push(`/users?search=${value}`);
    } else {
      history.push(`/users`);
    }

    clearTimeout(delayTimer);

    delayTimer = setTimeout(function () {
      filterUsersByName(value);
    }, 600);
  };

  return (
    <S.Wrapper>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchInput onChange={onSearchChange} value={searchValue} />
          <UserList users={filteredUserList} />
        </>
      )}
    </S.Wrapper>
  );
};

export default UserPage;
