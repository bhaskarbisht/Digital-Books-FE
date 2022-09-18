import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const BASE_URL = 'http://localhost:9000/login';

const BASE_URL = 'http://ec2-54-201-112-78.us-west-2.compute.amazonaws.com:9000/login';


@Injectable({
  providedIn: 'root',
})
export class LoginUserService {
  LoginUser(user: {  
    email: string;
    password: string;
  }) {
    return this.http.post(BASE_URL, user);
  }

  constructor(public http: HttpClient) {}
}
