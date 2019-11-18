import { createSelector } from "@ngrx/store";
import { getRootState, State } from "../reducers";
import { UserState } from "../reducers/user.reducer";

export const getUserState = createSelector(getRootState, (state: State) =>
  state ? state.user : null
);

export const getUsers = createSelector(getUserState, (state: UserState) =>
  state ? state.users : []
);
