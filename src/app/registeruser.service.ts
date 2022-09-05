import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:9000/signup';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserService {
  registerUser(user: {
    signUpAs: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    return this.http.post(BASE_URL, user);
  }

  constructor(public http: HttpClient) {}
}
