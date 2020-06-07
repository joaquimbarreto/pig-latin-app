import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.loginForm.value);

    this.http
      .post('http://localhost:3000/users/login', this.loginForm.value)
      // .pipe(res=> token = res.token)
      .subscribe((res: any) => {
        localStorage.removeItem('token');
        localStorage.setItem('token', res.token);
      });
  }

  logout() {
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: bearer,
      }),
    };

    this.http
      .post('http://localhost:3000/users/logout', null, httpOptions)
      .subscribe((res) => console.log(res));
  }
}
