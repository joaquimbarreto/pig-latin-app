import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as UserActions from '../../store/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private http: HttpClient,
    private store: Store<{ user: { user: User[] } }>
  ) {}

  ngOnInit() {}

  onSubmit() {
    const loginValues = this.loginForm.value;
    this.http.post('http://localhost:3000/users/login', loginValues).subscribe(
      (res: any) => {
        localStorage.removeItem('token');
        localStorage.setItem('token', res.token);
        console.log('user: ', res.user);
        const isLoggedIn = true;
        const newUser = new User(
          res.user.name,
          res.user.email,
          res.token,
          isLoggedIn
        );
        this.store.dispatch(new UserActions.LoginUser(newUser));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
