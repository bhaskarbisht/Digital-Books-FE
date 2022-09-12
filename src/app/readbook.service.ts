import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL_GET_BOOKS = 'http://localhost:9002/getBooks';


@Injectable({
  providedIn: 'root'
})
export class ReadbookService {

  //get all books for reader
  getBooks(){
    return this.http.get(BASE_URL_GET_BOOKS);
  }

  constructor(public http: HttpClient) { }
}
