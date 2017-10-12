import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ParamMap, ActivatedRoute} from "@angular/router";
import {UsersRemoteService} from "./users-remote-service";


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'user-info',
  templateUrl: 'user-info.component.html',
  styleUrls: ['user-info.component.css'],
})
export class UserInfoComponent implements OnInit,OnDestroy {
  private userId: any;
  private sub: any;


  selected_user={};

  params_id:string='';
  constructor(private remoteService: UsersRemoteService,private router: ActivatedRoute) {
  }




  //Get user by ID
  GetUserById(){
   this.remoteService.getUserById(this.userId).then(res => {
      this.selected_user = res;
  });
    // return this.selected_user;
  }
  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.userId = params['userId']; // (+) converts string 'id' to a number
      this.GetUserById();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  SaveChanges(){
    // need to save last update
   // this.selected_user.lastUpdated = Date.now();
    //TODO -- to complete this one after integration with the server
    this.remoteService.updateUser(this.selected_user);
    //todo NEED TO CHECK THE REULST -- if success or not


  }


  ClearChanges(){
    this.GetUserById();
  }


}
