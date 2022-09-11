import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TrendingbooksComponent } from './components/homepage/trendingbooks/trendingbooks.component';
import { TrendingauthorsComponent } from './components/homepage/trendingauthors/trendingauthors.component';
import { BestsellersComponent } from './components/homepage/bestsellers/bestsellers.component';
import { FooterComponent } from './components/homepage/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CreatebookComponent } from './components/createbook/createbook.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CreateheaderComponent } from './components/createbook/createheader/createheader.component';
import { AuthorbooksComponent } from './components/createbook/authorbooks/authorbooks.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    TrendingbooksComponent,
    TrendingauthorsComponent,
    BestsellersComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    CreatebookComponent,
    AboutusComponent,
    CreateheaderComponent,
    AuthorbooksComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
