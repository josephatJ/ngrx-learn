import { Injectable } from "@angular/core";
import { User } from "src/models/user.model";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private users: User[];
  constructor() {
    this.users = [
      { id: 1, name: "Rajab" },
      { id: 1, name: "Ibrahim" }
    ];
  }

  loadUsers(): Observable<User[]> {
    return of(this.users);
  }
}
