import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../../../users/models/user.model';
import * as UserActions from '../../../users/store/user.actions';
import { Router } from '@angular/router';

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
    private store: Store<{ user: { user: User[] } }>,
    private router: Router
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/translations']);
    } else {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    const loginValues = this.loginForm.value;
    this.http.post('http://localhost:3000/users/login', loginValues).subscribe(
      (res: any) => {
        console.log('res', res);
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
        this.store.dispatch(new UserActions.Login(newUser));
        this.router.navigate(['/translations']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
