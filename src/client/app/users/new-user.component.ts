import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ParamMap, ActivatedRoute, Router} from "@angular/router";
import {UsersRemoteService} from "./users-remote-service";


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'new-user',
  templateUrl: 'new-user.component.html',
  styleUrls: ['new-user.component.css'],
})
export class NewUserComponent implements OnInit {


  new_user= {}
  ;



  constructor(private remoteService: UsersRemoteService,private router: Router) {
  }





  ngOnInit() {
    this.ClearChanges();
  }

  //newID='';
  createUser(){

    this.new_user.createdAt = Date.now();
    //this.new_user.lastUpdated = Date.now();
    this.remoteService.createUser(this.new_user);
    //todo NEED TO CHECK THE REULST -- if success or not
    //if succeess go to aricle-info / id

    //this.newID='59c53fa0380f38338818bb4b';
    //this.router.navigate(['users',this.newID]);

  }

  ClearChanges(){
    this.new_user= {
      userId:'',
      username:'',
      mobileNumber:'',
      active:true,
    }
  }

}
