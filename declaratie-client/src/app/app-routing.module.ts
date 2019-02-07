import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from '../app/components/heroes/heroes.component';
import {HeroDetailComponent} from '../app/components/hero-detail/hero-detail.component';
import {DashboardComponent} from '../app/components/dashboard/dashboard.component';
// import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  // { path: 'product', component: ProductsComponent }
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
