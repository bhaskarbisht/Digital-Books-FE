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
  returneduser:RegisterUser=new RegisterUser();

  loginUser(){
    const observable = this.loginuserservice.LoginUser(this.user);
    observable.subscribe(
      (response: any) => {
       this.returneduser=response as RegisterUser;
          console.log(this.returneduser);

          if(this.returneduser==null){
            alert("null");
          }
          else{
            alert("Login Successfull");

            if(this.returneduser.signUpAs==1){
              console.log("author");
              this.route.navigate(['/createbook'],{state:{data:this.returneduser}});
            }
            else if(this.returneduser.signUpAs==2){
              console.log("reader");
              this.route.navigate(['/reader']);

            }
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
