import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.sass'],
})
export class TranslationsComponent implements OnInit, OnDestroy {
  user = {};
  private userSubscription: Subscription;

  constructor(private router: Router, private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.userSubscription = this.store
      .select('user')
      .pipe(map((auth) => auth.user))
      .subscribe((user: any) => {
        this.user = user;
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
