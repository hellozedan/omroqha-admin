import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RemoteService} from "./articles-remote-service";
import {ParamMap, ActivatedRoute} from "@angular/router";


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'article-info',
  templateUrl: 'article-info.component.html',
  styleUrls: [''],
})
export class ArticleInfoComponent implements OnInit,OnDestroy {
  private articleId: any;
  private sub: any;
  selected_article=
    {
      title:'title',
      subtitle:'this is a sub title',
      create_date:'2017-04-10T18:38:17.378Z',
      last_update:'2017-04-10T18:38:17.378Z',
      _id:'58ebd119c8318f3a1885488e',
      content:'<h1>hello </h1>',
      active:true
    }
  ;


  params_id:string='';
  constructor(private remoteService: RemoteService,private router: ActivatedRoute) {
  }




  //Get Article by ID
  GetArticleById(){
   this.remoteService.getArticleById(this.articleId).then(res => {
      this.selected_article = res;
  });
    // return this.selected_article;
  }
  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.articleId = params['articleId']; // (+) converts string 'id' to a number
      this.GetArticleById();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  SaveChanges(){
    //TODO -- to complete this one after integration with the server
    this.remoteService.updateArticle(this.selected_article);

  }


}
