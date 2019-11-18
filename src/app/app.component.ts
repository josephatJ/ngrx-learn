import { Component, OnInit } from "@angular/core";
import { User } from "src/models/user.model";
import { Store, select } from "@ngrx/store";
import { State } from "./store/reducers";
import { addUserAction, deleteUserAction } from "./store/actions/user.actions";
import { Observable } from "rxjs";
import { getUsers } from "./store/selectors/user.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  users$: Observable<User[]>;
  title = "ngrx-users";

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.users$ = this.store.pipe(select(getUsers));
  }

  onAdd(e) {
    e.stopPropagation();
    this.store.dispatch(addUserAction());
  }

  onDelete(e, id) {
    e.stopPropagation();
    this.store.dispatch(deleteUserAction({ id }));
  }
}
