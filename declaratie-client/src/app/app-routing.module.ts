import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/app/app.component';
import {DeclarationTableComponent} from './components/declaration-table/declaration-table.component';
import {DeclaratieCreateComponent} from './components/declaratie-create/declaratie-create.component';
import {DeclarationStepperComponent} from './components/declaration-stepper/declaration-stepper.component';
import {DeclarationExpansionListComponent} from './components/declaration-expansion-list/declaration-expansion-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/declarationtable', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'declarationtable', component: DeclarationTableComponent },
  { path: 'declarationcreate', component: DeclaratieCreateComponent },
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
