import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as UserActions from '../../../users/store/user.actions';
import * as appReducer from '../../../app.reducer';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  @Input() isLoggedIn: boolean;
  @Output() loggedOut = new EventEmitter<void>();

  constructor(
    private http: HttpClient,
    private store: Store<appReducer.AppState>
  ) {}

  ngOnInit() {}

  logout() {
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: bearer,
      }),
    };

    this.http.post('http://localhost:3000/users/logout', null, httpOptions);

    localStorage.removeItem('token');
    this.store.dispatch(new UserActions.LogoutUser());

    this.loggedOut.emit();
  }
}
