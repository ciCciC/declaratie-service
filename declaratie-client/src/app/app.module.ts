import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import {DeclarationTableComponent } from './components/declaration-table/declaration-table.component';

import {DeclarationService} from './services/declaration/declaration.service';
import {DeclarationCreateComponent} from './components/declaration-create/declaration-create.component';
import { DeclarationViewComponent } from './components/declaration-view/declaration-view.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import {ErrorHandlerService} from './services/errorhandlerservice/error-handler.service';
import { MessageDialogComponent } from './dialogs/message-dialog/message-dialog.component';
import { DeclarationUpdateComponent } from './components/declaration-update/declaration-update.component';
import { DeclarationfileUploadComponent } from './components/declarationfile-upload/declarationfile-upload.component';
import { ImageDialogComponent } from './dialogs/image-dialog/image-dialog.component';
import {AuthenticationService} from './services/authservice/authentication.service';
import { NotificationDialogComponent } from './dialogs/notification-dialog/notification-dialog.component';

// Dit is om de animatie uit te zetten
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DeclarationTableComponent,
    DeclarationCreateComponent,
    DeclarationViewComponent,
    ErrorDialogComponent,
    MessageDialogComponent,
    DeclarationUpdateComponent,
    DeclarationfileUploadComponent,
    ImageDialogComponent,
    NotificationDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [DeclarationTableComponent, DeclarationViewComponent, ErrorDialogComponent,
    MessageDialogComponent, DeclarationUpdateComponent, ImageDialogComponent, NotificationDialogComponent],
  providers: [ErrorHandlerService, DeclarationService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
