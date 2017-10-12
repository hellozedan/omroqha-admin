import {Component, OnInit, ViewChild} from '@angular/core';
import {NameListService} from '../shared/name-list/name-list.service';
import {DataTable, DataTableResource} from 'angular-4-data-table';
import {DomainRemoteService} from "./domains-remote-service";
import {Router} from '@angular/router';
import {DomainsRoutingModule} from "./domains-routing.module";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-domains',
  templateUrl: 'domains.component.html',
  styleUrls: ['domains.component.css'],
})
export class DomainsComponent implements OnInit {

  domainsArray=[
    {
      title:'title',
      subtitle:'this is a sub title',
      create_date:'2017-04-10T18:38:17.378Z',
      last_update:'2017-04-10T18:38:17.378Z',
      _id:'58ebd119c8318f3a1885488e',
      content:'<h1>hello </h1>',
      active:true
    }
  ];
  items=[];
  itemCount = 0;
  ngOnInit() {
  }

  constructor(private remoteService: DomainRemoteService, private router: Router) {

  }

  reloadItems(params) {
    this.remoteService.query(params).then(result => {
      console.log(result);
      this.items = result.items;
      this.itemCount = result.count;
    });
  }

  goToCreate(){
    this.router.navigate(['domains/new']);
  }
  rowClick (e:any) {
    this.router.navigate(['domains',e.row.item._id]);
      console.log(e.row.item._id);
  }


  DeleteDomain(item:any){

    this.remoteService.removeDomainById(item._id)
    console.log('hhhhhhhhh');
  }
}
