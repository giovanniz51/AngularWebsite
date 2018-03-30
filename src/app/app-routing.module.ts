import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForestsComponent } from './forests/forests.component';
import { ForestEditComponent } from './forest-edit/forest-edit.component';
import { ForestShowComponent } from './forest-show/forest-show.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'forests', component: ForestsComponent},
  { path: 'forests/:id', component: ForestShowComponent},
  { path: 'forests/:id/edit', component: ForestEditComponent, canActivate: [AuthGuard]}
  
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports:[RouterModule]

})
export class ForestRoutes { }