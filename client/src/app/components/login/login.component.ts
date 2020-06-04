import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
      .subscribe((res) => console.log(res));
  }
}
