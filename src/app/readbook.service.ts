import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL_GET_BOOKS = 'http://localhost:9002/getBooks';
const SEARCH_BY_CAT='http://localhost:9002/searchCategory/';
const SEARCH_BY_Author='http://localhost:9002/searchAuthor/';
const SEARCH_BY_Price='http://localhost:9002/searchPrice/';



@Injectable({
  providedIn: 'root'
})
export class ReadbookService {

  //get all books for reader
  getBooks(){
    return this.http.get(BASE_URL_GET_BOOKS);
  }

  searchBooksByCategory(search){
    return this.http.get(SEARCH_BY_CAT+search);
  }

  searchBooksByAuthor(search){
    return this.http.get(SEARCH_BY_Author+search);
  }
  searchBooksByPrice(search){
    return this.http.get(SEARCH_BY_Price+search);
  }


  constructor(public http: HttpClient) { }
}
