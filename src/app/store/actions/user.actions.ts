import { createAction, props } from "@ngrx/store";
import { User } from "src/models/user.model";

export const getUsersAction = createAction("[User] Get users");
export const addUsersAction = createAction(
  "[User] Add users",
  props<{ users: User[] }>()
);
export const addUserAction = createAction("[User] Add user");
export const deleteUserAction = createAction(
  "[User] delete user",
  props<{ id: number }>()
);
