import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from '../app/components/heroes/heroes.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {DashboardComponent} from '../app/components/dashboard/dashboard.component';
import {ProductComponent} from '../app/components/product/product.component';
import {AppComponent} from './components/app/app.component';
import {DeclarationTableComponent} from './components/declaration-table/declaration-table.component';
import {DeclaratieCreateComponent} from './components/declaratie-create/declaratie-create.component';
import {DeclarationStepperComponent} from './components/declaration-stepper/declaration-stepper.component';
import {DeclarationExpansionListComponent} from './components/declaration-expansion-list/declaration-expansion-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/declarationtable', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'product', component: ProductComponent },
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
