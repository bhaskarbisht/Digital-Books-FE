import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import RegisterUser from 'src/app/Entity/RegisterUser';
import { LoginUserService } from 'src/app/loginuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user:RegisterUser=new RegisterUser();
  loginresponse:number;

  loginUser(){
    const observable = this.loginuserservice.LoginUser(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response);
       this.loginresponse=response;
       if(this.loginresponse==5){
        alert("Please check your password");
       }
       else if(this.loginresponse==0){
        alert("invalid User");
       }
       else{
        alert("Login Successfull");
        this.route.navigate(['/createbook']);
       }
      
      },
      function (error) {
        console.log(error);
        alert('User not Login');
      }
    );
  }

  constructor(public loginuserservice:LoginUserService,private route:Router) { }

  ngOnInit(): void {
  }

}
