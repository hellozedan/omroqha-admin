import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RemoteService} from "./articles-remote-service";
import {ParamMap, ActivatedRoute, Router} from "@angular/router";


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'new-article',
  templateUrl: 'new-article.component.html',
  styleUrls: [''],
})
export class NewArticleComponent implements OnInit {


  new_article=
    {
      title:'',
      subTitle:'',
      content:'',
      active:false,
      likes:0
    }
  ;



  constructor(private remoteService: RemoteService,private router: Router) {
  }





  ngOnInit() {
  }

  //newID='';
  createArticle(){

    this.new_article.createdAt = Date.now();
    this.new_article.lastUpdated = Date.now();
    this.remoteService.createArticle(this.new_article);
    //todo NEED TO CHECK THE REULST -- if success or not
    //if succeess go to aricle-info / id

    //this.newID='59c53fa0380f38338818bb4b';
    //this.router.navigate(['articles',this.newID]);

  }


}
