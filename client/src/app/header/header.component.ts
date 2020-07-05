import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as appReducer from '../app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private userSubscription: Subscription;

  constructor(private store: Store<appReducer.AppState>) {}

  ngOnInit() {
    this.userSubscription = this.store
      .select('user')
      .pipe(map((auth) => auth.user))
      .subscribe((user: any) => {
        if (localStorage.getItem('token') && user) {
          this.isLoggedIn = true;
          return console.log('token && user: ', this.isLoggedIn);
        }
      });
  }

  logout() {
    this.isLoggedIn = false;
    console.log('Logout button clicked: ', !this.isLoggedIn);
  }

  login() {
    this.isLoggedIn = true;
    console.log('Login button clicked: ', this.isLoggedIn);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
