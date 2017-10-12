import {Component, OnInit, ViewChild} from '@angular/core';
import {NameListService} from '../shared/name-list/name-list.service';
import {DataTable, DataTableResource} from 'angular-4-data-table';
import {Router} from '@angular/router';
import {ServiceProvidersRemoteService} from "./service-provider-remote-service";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'service-providers.component.html',
  styleUrls: ['service-providers.component.css'],
})
export class ServiceProvidersComponent implements OnInit {


  items=[];
  itemCount = 0;
  ngOnInit() {
  }

  constructor(private remoteService: ServiceProvidersRemoteService, private router: Router) {

  }

  reloadItems(params) {
    this.remoteService.query(params).then(result => {
      this.items = result.items;
      this.itemCount = result.count;
    });
  }

  goToCreate(){
    this.router.navigate(['service-providers/new']);
  }
  rowClick (e:any) {
    this.router.navigate(['service-providers',e.row.item._id]);
      console.log(e.row.item._id);
  }


  DeleteItem(item:any){

    this.remoteService.removeServiceProvidersById(item._id)
    console.log('hhhhhhhhh');
  }
}
