import { handleActions, createActions } from "redux-actions";

import initialState, * as handlers from "./handlers";

export const actions = createActions({
  GET_USERS_REQUEST: undefined,
  GET_USERS_SUCCESS: undefined,
  GET_USERS_FAILURE: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.getUsersRequest, handlers.getUsersRequest],
    [actions.getUsersSuccess, handlers.getUsersSuccess],
    [actions.getUsersFailure, handlers.getUsersFailure],
  ]),
  initialState
);

export default reducer;
