import { Component, OnInit } from '@angular/core';
import RegisterUser from 'src/app/Entity/RegisterUser';
import { RegisterUserService } from 'src/app/registeruser.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:RegisterUser=new RegisterUser();
  Signupalert="Registered Successfully please Login  to continue!!";
  showAlert=false;

  registerUser(){
    const observable = this.registeruserservice.registerUser(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        this.showAlert=true;
      },
      function (error) {
        console.log(error);
        alert('User not registered');
      }
    );
  }

  constructor(public registeruserservice:RegisterUserService) { }

  ngOnInit(): void {
  }

}
