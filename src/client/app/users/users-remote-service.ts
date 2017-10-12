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
export class UsersRemoteService {

  constructor (private http: Http) {}

  query() {
    return this.http.get(BASE_URL + '/api/users' ).toPromise()
      .then((resp: Response) => resp.json());
  }



  // Create an user
  createUser (body:any) {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    // console.log(BASE_URL + '/api/users?' + body._id,body,options);
    return this.http.post(BASE_URL + '/api/users' , body, options).toPromise()
      .then((resp: Response) => resp.json() );
  }

  // Update an user
  updateUser (body:any) {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
   // console.log(BASE_URL + '/api/users?' + body._id,body,options);
    return this.http.put(BASE_URL + '/api/users/' + body._id, body, options).toPromise()
      .then((resp: Response) => {resp.json()} );
  }


  //get user by Id
  getUserById(_id) {
    return this.http.get(BASE_URL + '/api/users/' + _id).toPromise()
      .then((resp: Response) => resp.json());
  }


  //remove user by Id
  removeUserById(_id) {
    return this.http.delete(BASE_URL + '/api/users/' + _id).toPromise()
      .then((resp: Response) => resp.json());
  }



}
