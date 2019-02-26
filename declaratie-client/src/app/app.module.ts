import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/components/app/app.component';
import { HeroesComponent } from '../app/components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { ProductComponent } from './components/product/product.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import { DeclarationTableComponent } from './components/declaration-table/declaration-table.component';
import { DeclaratieCreateComponent } from './components/declaratie-create/declaratie-create.component';
import { DeclarationStepperComponent } from './components/declaration-stepper/declaration-stepper.component';
import { DeclarationPhotoUploadComponent } from './components/declaration-photo-upload/declaration-photo-upload.component';
import { DeclarationExpansionListComponent } from './components/declaration-expansion-list/declaration-expansion-list.component';

// Dit is om de animatie uit te zetten
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    ProductComponent,
    DeclarationTableComponent,
    DeclaratieCreateComponent,
    DeclarationStepperComponent,
    DeclarationPhotoUploadComponent,
    DeclarationExpansionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
