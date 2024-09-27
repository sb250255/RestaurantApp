import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { CateringComponent } from './catering/catering.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { ContactComponent } from './contact/contact.component';

const appRoute : Routes = [
  {path:'', component:HomeComponent},// http:localhost:4200
  {path: 'menu', component: MenuComponent},// http:localhost:4200/users 
  {path:'about', component:AboutComponent},
  {path:'catering', component:CateringComponent},
  {path:'groceries', component:GroceriesComponent},
  {path:'contact', component:ContactComponent},
  
  {path:'**', redirectTo:''}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    CateringComponent,
    GroceriesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
