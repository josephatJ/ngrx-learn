import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import { getUsersAction, addUsersAction } from "../actions/user.actions";
import { switchMap, map } from "rxjs/operators";
import { User } from "src/models/user.model";

@Injectable()
export class UserEffects implements OnInitEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsersAction),
      switchMap(() =>
        this.userService
          .loadUsers()
          .pipe(map((users: User[]) => addUsersAction({ users })))
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}

  ngrxOnInitEffects() {
    return getUsersAction();
  }
}
