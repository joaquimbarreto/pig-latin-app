import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import * as appReducer from '../app.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input() alertError: boolean;

  user: Observable<{ user: User[] }>;

  constructor(private store: Store<appReducer.AppState>) {}

  ngOnInit() {
    this.user = this.store.select('user');
  }

  onhHandleAlertError() {
    this.alertError = null;
  }
}
