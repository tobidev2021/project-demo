import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/services/auth/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate : [AuthGuard],
    loadChildren: () =>
      import('./features/articles/articles.module')
              .then(m => m.ArticlesModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
