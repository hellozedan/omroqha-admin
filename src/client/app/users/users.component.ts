import {Component, OnInit, ViewChild} from '@angular/core';
import {NameListService} from '../shared/name-list/name-list.service';
import {DataTable, DataTableResource} from 'angular-4-data-table';
import {Router} from '@angular/router';
import {UsersRemoteService} from "./users-remote-service";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
})
export class UsersComponent implements OnInit {


  items=[];
  itemCount = 0;
  ngOnInit() {
    this.remoteService.query().then(result => {
      console.log(result);
      this.items = result;
    });
  }

  constructor(private remoteService: UsersRemoteService, private router: Router) {

  }



  goToCreate(){
    this.router.navigate(['users/new']);
  }
  rowClick (item:any) {
    this.router.navigate(['users',item._id]);
      //console.log(e.row.item._id);
  }


  DeleteUser(item:any){
    //need to ask first and then notification
    this.remoteService.removeUserById(item._id)
    console.log('hhhhhhhhh');
  }
}
