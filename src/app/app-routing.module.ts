import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AuthorbooksComponent } from './components/createbook/authorbooks/authorbooks.component';
import { CreatebookComponent } from './components/createbook/createbook.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'home',component:HomepageComponent},
  {path:'createbook',component:CreatebookComponent},
  {path:'mybooks',component:AuthorbooksComponent},
  {path:'logout',component:LogoutComponent}


    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
