import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/app/app.component';
import {DeclarationTableComponent} from './components/declaration-table/declaration-table.component';
import {DeclarationStepperComponent} from './components/declaration-stepper/declaration-stepper.component';
import {DeclarationCreateComponent} from './components/declaration-create/declaration-create.component';
import {DeclarationViewComponent} from './components/declaration-view/declaration-view.component';
import {DeclarationfileUploadComponent} from './components/declarationfile-upload/declarationfile-upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/declarations', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'declarations', component: DeclarationTableComponent },
  { path: 'declarationcreate', component: DeclarationCreateComponent },
  { path: 'declarationview', component: DeclarationViewComponent },
  { path: 'declarationfile', component: DeclarationfileUploadComponent }
  // { path: 'declarationstepper', component: DeclarationStepperComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
