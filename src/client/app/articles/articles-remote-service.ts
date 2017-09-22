import { Injectable }     from '@angular/core';
import {Http, RequestOptions, Response,Headers} from '@angular/http';
import { DataTableParams } from 'angular-4-data-table';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";


const BASE_URL = 'http://localhost:4040';

function paramsToQueryString(params: DataTableParams) {
  let result = [];

  if (params.offset !== null) {
    result.push(['_start', params.offset]);
  }
  if (params.limit !== null) {
    result.push(['_limit', params.limit]);
  }
  if (params.sortBy !== null) {
    result.push(['_sort', params.sortBy]);
  }
  if (params.sortAsc !== null) {
    result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
  }

  return result.map(param => param.join('=')).join('&');
}


@Injectable()
export class RemoteService {

  constructor (private http: Http) {}

  query(params: DataTableParams) {
    return this.http.get(BASE_URL + '/api/articles?' + paramsToQueryString(params)).toPromise()
      .then((resp: Response) => ({
        items: resp.json(),
        count: Number(resp.headers.get('X-Total-Count'))
      }));
  }


  // Update an Article
  updateArticle (body:any) {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
   // console.log(BASE_URL + '/api/articles?' + body._id,body,options);
    return this.http.put(BASE_URL + '/api/articles?' + body._id, body, options) // ...using put request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  //get Article by Id

  GetArticleById(_id:string):any{
    return this.http.get(BASE_URL + '/api/articles?' + _id)
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }


}
