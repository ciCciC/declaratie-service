import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/components/app/app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import {DeclarationTableComponent } from './components/declaration-table/declaration-table.component';

import { DeclarationStepperComponent } from './components/declaration-stepper/declaration-stepper.component';
import { DeclarationPhotoUploadComponent } from './components/declaration-photo-upload/declaration-photo-upload.component';
import { DeclarationExpansionListComponent } from './components/declaration-expansion-list/declaration-expansion-list.component';
import {DeclarationService} from './services/declaration/declaration.service';
import {DeclarationCreateComponent} from './components/declaration-create/declaration-create.component';
import { DeclarationViewComponent } from './components/declaration-view/declaration-view.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import {ErrorHandlerService} from './services/errorhandlerservice/error-handler.service';
import { MessageDialogComponent } from './dialogs/message-dialog/message-dialog.component';

// Dit is om de animatie uit te zetten
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DeclarationTableComponent,
    DeclarationCreateComponent,
    DeclarationStepperComponent,
    DeclarationPhotoUploadComponent,
    DeclarationExpansionListComponent,
    DeclarationViewComponent,
    ErrorDialogComponent,
    MessageDialogComponent
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
  entryComponents: [DeclarationTableComponent, DeclarationViewComponent, ErrorDialogComponent, MessageDialogComponent],
  providers: [ErrorHandlerService, DeclarationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
