import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here;


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForestsComponent } from './forests/forests.component';
import { ForestsService } from './forests.service';
import { ForestEditComponent } from './forest-edit/forest-edit.component';
import { ForestShowComponent } from './forest-show/forest-show.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'forests', component: ForestsComponent},
  { path: 'forests/:id', component: ForestShowComponent},
  { path: 'forests/:id/edit', component: ForestEditComponent}
  
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ForestsComponent,
    ForestEditComponent,
    ForestShowComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [ForestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
