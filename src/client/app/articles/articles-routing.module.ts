import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import {ArticleInfoComponent} from "./article-info.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'articles', component: ArticlesComponent,
        children: [
          {
            path: 'articles/:articleId',
            component: ArticleInfoComponent
            //loadChildren: '/app/editor/editor.module'
          },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
