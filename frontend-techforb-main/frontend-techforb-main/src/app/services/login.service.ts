import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.get<User[]>(
      `${environment.dataBaseUrl}/user`,
      { headers: headers }
    );
  }

  postUser(requestBody: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(
      `${environment.dataBaseUrl}/user`,
      requestBody,
      { headers: headers }
    );
  }

  loggedCheck() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === null) {
      isLoggedIn = 'false';
      return false;
    } else {
      return true;
    }
  }
}
