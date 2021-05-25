const initialState = {
  userList: [],
  loadingUsers: true,
  error: "",
};

export const getUsersRequest = (state) => ({
  ...state,
  loadingUsers: true,
});

export const getUsersSuccess = (state, { payload }) => ({
  ...state,
  loadingUsers: false,
  userList: payload,
});

export const getUsersFailure = (state) => ({
  ...state,
  loadingUsers: false,
  error: "Loading users failed, try again",
});

export default initialState;
