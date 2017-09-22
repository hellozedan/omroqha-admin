import {Component, OnInit, ViewChild} from '@angular/core';
import {NameListService} from '../shared/name-list/name-list.service';
import {DataTable, DataTableResource} from 'angular-4-data-table';
import {RemoteService} from "./articles-remote-service";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'articles.component.html',
  styleUrls: ['articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  items = [];
  itemCount = 0;
  ngOnInit() {
  }

  constructor(private remoteService: RemoteService) {
  }

  reloadItems(params) {
    this.remoteService.query(params).then(result => {
      this.items = result.items;
      this.itemCount = result.count;
    });
  }
}
