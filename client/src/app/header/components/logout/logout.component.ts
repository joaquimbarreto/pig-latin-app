import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

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
