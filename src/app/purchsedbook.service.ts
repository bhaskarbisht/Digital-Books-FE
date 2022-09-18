import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const URL_PURCHASED_BOOKS="http://localhost:9001/getPurchase/";

const URL_PURCHASED_BOOKS="http://ec2-54-201-112-78.us-west-2.compute.amazonaws.com:9001/getPurchase/";


@Injectable({
  providedIn: 'root'
})
export class PurchsedbookService {

  getPuchasedBooks(userid:number){
    return this.http.get(URL_PURCHASED_BOOKS+userid);
  }

  constructor(public http: HttpClient) { }
}
