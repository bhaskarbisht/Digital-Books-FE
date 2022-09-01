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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
