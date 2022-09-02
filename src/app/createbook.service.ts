import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL="http://localhost:9001/savebook";

@Injectable({
  providedIn: 'root',
})
export class CreatebookService {
  createBook(book: {
    authorId: number;
    logo: string;
    title: string;
    category: string;
    price: number;
    author: string;
    publisher: string;
    publishedDate: string;
    active: boolean;
    content: string;
  }){
    return this.http.post(BASE_URL,book);
  }

  constructor(public http:HttpClient) {}
}
