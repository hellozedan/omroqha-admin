import { Injectable }     from '@angular/core';
import {Http, RequestOptions, Response,Headers} from '@angular/http';
import { DataTableParams } from 'angular-4-data-table';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";


const BASE_URL = 'http://localhost:4040';

function paramsToQueryString(params: DataTableParams) {
  let result = [];

  if (params.offset !== null) {
    result.push(['start', params.offset]);
  }
  if (params.limit !== null) {
    result.push(['limit', params.limit]);
  }
  if (params.sortBy !== null) {
    result.push(['sort', params.sortBy]);
  }
  if (params.sortAsc !== null) {
    result.push(['order', params.sortAsc ? 'ASC' : 'DESC']);
  }

  return result.map(param => param.join('=')).join('&');
}


@Injectable()
export class ServiceProvidersRemoteService {

  constructor (private http: Http) {}

  query(params: DataTableParams) {
    return this.http.get(BASE_URL + '/api/serviceProviders/getAllforAdmin?' + paramsToQueryString(params)).toPromise()
      .then((resp: Response) =>resp.json());
  }



  // Create an serviceProviders
  createServiceProviders (body:any) {

    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    // console.log(BASE_URL + '/api/serviceProviders?' + body._id,body,options);
    return this.http.post(BASE_URL + '/api/serviceProviders' , body, options).toPromise()
      .then((resp: Response) => resp.json() );
  }

  // Update an serviceProviders
  updateServiceProviders (body:any) {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
   // console.log(BASE_URL + '/api/serviceProviders?' + body._id,body,options);
    return this.http.put(BASE_URL + '/api/serviceProviders/' + body._id, body, options).toPromise()
      .then((resp: Response) => {; resp.json()} );
  }


  //get serviceProviders by Id
  getServiceProvidersById(_id) {
    return this.http.get(BASE_URL + '/api/serviceProviders/' + _id).toPromise()
      .then((resp: Response) => resp.json());
  }


  //remove serviceProviders by Id
  removeServiceProvidersById(_id) {
    return this.http.remove(BASE_URL + '/api/serviceProviders/' + _id).toPromise()
      .then((resp: Response) => resp.json());
  }



}
