import {Component, OnInit, ViewChild} from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { DataTable, DataTableResource } from 'angular-4-data-table';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName: string = '';
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  yearLimit = 1999;
  errorMessage: string;
  names: any[] = [];
  cars = [
    { year: 1997, maker: 'Ford', model: 'E350', desc: 'ac, abs, moon', price: 3000.00 },
    { year: 1999, maker: 'Chevy', model: 'Venture "Extended Edition"', price: 4900.00 },
    { year: 1999, maker: 'Checy', model: 'Venture "Extended Edition, Very Large"', price: 5000.00 },
    { year: 1996, maker: 'Jeep', model: 'Grand Cherokee', desc: 'air, moon roof, loaded', price: 4799.00 }
  ];
  carResource = new DataTableResource(this.cars);

  carCount = 0;
  @ViewChild(DataTable) carsTable: DataTable;
  public editorContent: string = 'My Document\'s Title';
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {
    this.rowColors = this.rowColors.bind(this);

    this.carResource.count().then(count => this.carCount = count);
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  bbbb(){
    console.log('aaa')
    debugger;
  }
  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }
  reloadCars(params) {
    this.carResource.query(params).then(cars => this.cars = cars);
  }

  // custom features:

  carClicked(car) {
    alert(car.model);
  }


  rowColors(car) {
    if (car.year >= this.yearLimit) return 'rgb(255, 255, 197)';
  }
}
