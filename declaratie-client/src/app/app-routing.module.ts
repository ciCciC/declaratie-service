import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeclarationTableComponent} from './components/declaration-table/declaration-table.component';
import {DeclarationCreateComponent} from './components/declaration-create/declaration-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/declarations', pathMatch: 'full' },
  { path: 'declarations', component: DeclarationTableComponent },
  { path: 'declarations/create', component: DeclarationCreateComponent }
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
