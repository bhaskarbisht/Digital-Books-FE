import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import Books from './Entity/Books';

const BASE_URL = 'http://localhost:9001/savebook';
const BASE_URL_GET_BOOKS='http://localhost:9001/books';
const BASE_URL_GET_BOOKS_BY_AUTH_ID='http://localhost:9001/book/author/'

@Injectable({
  providedIn: 'root',
})
export class CreatebookService {
  createBook(book: Books, uploadedImage: File) {
    const formData = new FormData();
    formData.append('bookstring', JSON.stringify(book));

    formData.append('image', uploadedImage);

    return this.http.post(BASE_URL, formData);
  }


  getBooks(){
    return this.http.get(BASE_URL_GET_BOOKS);
  }

  getBooksByauthorId(authorId:number){
    
    return this.http.get(BASE_URL_GET_BOOKS_BY_AUTH_ID+authorId);
  }
  

  constructor(public http: HttpClient) {}
}
