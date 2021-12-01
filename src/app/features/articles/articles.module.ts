import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlesComponent } from './article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleFormComponent,
    ArticleItemComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule { }
