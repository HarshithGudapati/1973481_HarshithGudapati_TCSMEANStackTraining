import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import  {SignupComponent} from './components/signup/signup.component'
import { MyPortfolioComponent } from './components/myportfolio/my-portfolio.component';
import{MyAuthGaurd} from './myauthguard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
    LoginComponent,
    MyPortfolioComponent,
    SignupComponent,
    NavbarComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [MyAuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
