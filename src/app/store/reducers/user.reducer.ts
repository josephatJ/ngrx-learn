import { User } from "src/models/user.model";
import { createReducer, on } from "@ngrx/store";
import {
  addUserAction,
  deleteUserAction,
  addUsersAction
} from "../actions/user.actions";

export interface UserState {
  users: User[];
  currentUser: number;
}

const initialState: UserState = {
  users: [],
  currentUser: 1
};

const reducer = createReducer(
  initialState,
  on(addUsersAction, (state, { users }) => {
    return { ...state, users };
  }),
  on(addUserAction, state => {
    const users = state.users;
    const id = users.length + 1;

    return { ...state, users: [...users, { id, name: `User ${id}` }] };
  }),
  on(deleteUserAction, (state, { id }) => {
    const users = state.users;
    const user = users.find((user: User) => user.id === id);

    if (user) {
      const userIndex = users.indexOf(user);

      return {
        ...state,
        users: [...users.slice(0, userIndex), ...users.slice(userIndex + 1)]
      };
    }

    return state;
  })
);
export function userReducer(state, action) {
  return reducer(state, action);
}
