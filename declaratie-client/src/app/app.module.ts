import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/components/app/app.component';
import { HeroesComponent } from '../app/components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from '../app/components/messages/messages.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';

// Dit is om de animatie uit te zetten
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
