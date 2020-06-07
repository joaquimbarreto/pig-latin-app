import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as appReducer from '../app.reducer';
// import * as UserActions from '../users/store/user.actions';

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
    this.userSubscription = this.store.select('user').subscribe((user: any) => {
      if (localStorage.getItem('token') || user.user.length > 0) {
        return (this.isLoggedIn = true);
      }
      console.log('isLoggedin: ', this.isLoggedIn);
    });
    console.log('isLoggedin: ', this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    console.log('isLoggedin: ', this.isLoggedIn);
  }

  ngOnDestroy() {
    // this.store.dispatch(new UserActions.LogoutUser());
    this.userSubscription.unsubscribe();
  }
}
