import {NgModule} from '@angular/core';
import {ArticlesComponent} from './articles.component';
import {ArticlesRoutingModule} from './articles-routing.module';
import {SharedModule} from '../shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {DataTableModule} from 'angular-4-data-table';
import {RemoteService} from './articles-remote-service';
import {ArticleInfoComponent} from "./article-info.component";
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [
  { path: 'articles/:id',      component: ArticleInfoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),ArticlesRoutingModule, SharedModule, AgmCoreModule.forRoot({
    apiKey: 'AIzaSyB-ziqpuMMH52jxcevWRuFiRPeuD09gn9U'
  }), FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), DataTableModule],
  declarations: [ArticlesComponent,ArticleInfoComponent],
  exports: [ArticlesComponent,ArticleInfoComponent],
  providers: [RemoteService]
})
export class ArticlesModule {
}
