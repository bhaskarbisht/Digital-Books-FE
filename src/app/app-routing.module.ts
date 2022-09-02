import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatebookComponent } from './components/createbook/createbook.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomepageComponent},
  {path:'createbook',component:CreatebookComponent}

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
