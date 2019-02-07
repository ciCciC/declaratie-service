import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/components/app/app.component';
import { HeroesComponent } from '../app/components/heroes/heroes.component';
import { HeroDetailComponent } from '../app/components/hero-detail/hero-detail.component';
import { MessagesComponent } from '../app/components/messages/messages.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';

// import { ProductsComponent } from './products/products.component';
// import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    // UsersComponent,
    // ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
