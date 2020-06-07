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
          console.log('isLoggedin: ', this.isLoggedIn);
        }
        console.log('isLoggedin: ', this.isLoggedIn);
      });
  }

  logout() {
    this.isLoggedIn = false;
    console.log('isLoggedin: ', this.isLoggedIn);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
