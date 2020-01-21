import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

/**
 * @constant  routes guarda las rutas sincronas y asingronas para ser administradas
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reg',
    loadChildren: () => import('./reg/reg.module').then(mod => mod.RegModule)
  },
  {
    path: 'queries',
    loadChildren: () => import('./queries/queries.module').then(mod => mod.QueriesModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
