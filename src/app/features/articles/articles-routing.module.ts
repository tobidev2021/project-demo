import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './article.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';


const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: [
      { path: '', component: ArticlesListComponent },
      { path: 'create', component: ArticleFormComponent },
      { path: 'edit/:id', component: ArticleFormComponent },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
