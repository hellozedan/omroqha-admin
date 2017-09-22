import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import {ArticleInfoComponent} from './article-info.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'articles', component: ArticlesComponent},
      {path: 'articles/:articleId', component: ArticleInfoComponent}
    ])
  ],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
