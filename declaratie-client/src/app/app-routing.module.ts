import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/app/app.component';
import {DeclarationTableComponent} from './components/declaration-table/declaration-table.component';
import {DeclarationStepperComponent} from './components/declaration-stepper/declaration-stepper.component';
import {DeclarationExpansionListComponent} from './components/declaration-expansion-list/declaration-expansion-list.component';
import {DeclarationCreateComponent} from './components/declaration-create/declaration-create.component';
import {DeclarationViewComponent} from './components/declaration-view/declaration-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/declarationtable', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'declarationtable', component: DeclarationTableComponent },
  { path: 'declarationcreate', component: DeclarationCreateComponent },
  { path: 'declarationview', component: DeclarationViewComponent },
  { path: 'declarationstepper', component: DeclarationStepperComponent },
  { path: 'declarationexpansionlist', component: DeclarationExpansionListComponent }
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
