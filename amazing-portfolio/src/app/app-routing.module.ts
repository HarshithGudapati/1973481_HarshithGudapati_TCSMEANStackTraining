import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './components/home/home.component'
import{LoginComponent} from './components/login/login.component'
import{MyPortfolioComponent} from './components/myportfolio/my-portfolio.component'
import{SignupComponent} from './components/signup/signup.component'
import{LogoutComponent} from './components/logout/logout.component'
import { MyAuthGaurd } from './myauthguard';


const routes: Routes = [
  {path:'\home', component : HomeComponent},
  {path:'\login',component : LoginComponent },
  {path:'\myportfolio',component : MyPortfolioComponent,canActivate:[MyAuthGaurd]  },
  {path:'\signup', component : SignupComponent},
  {path:'\logout', component : LogoutComponent},
  {path:'',redirectTo:"\login" , pathMatch:"full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
