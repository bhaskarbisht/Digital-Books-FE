import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import Books from './Entity/Books';

// const BASE_URL = 'http://localhost:9001/savebook';
// const BASE_URL_GET_BOOKS='http://localhost:9001/books';
// const BASE_URL_GET_BOOKS_BY_AUTH_ID='http://localhost:9001/book/author/'
// const BASE_URL_PUT_BY_BOOK_ID='http://localhost:9001/update/';
// const BASE_URL_DELETE_BY_BOOK_ID='http://localhost:9001/delete/';

const BASE_URL = 'http://ec2-54-201-112-78.us-west-2.compute.amazonaws.com:9001/savebook';
const BASE_URL_GET_BOOKS='http://ec2-54-201-112-78.us-west-2.compute.amazonaws.com:9001/books';
const BASE_URL_GET_BOOKS_BY_AUTH_ID='http://ec2-54-201-112-78.us-west-2.compute.amazonaws.com:9001/book/author/'
const BASE_URL_PUT_BY_BOOK_ID='http://ec2-54-201-112-78.us-west-2.compute.amazonaws.com:9001/update/';
const BASE_URL_DELETE_BY_BOOK_ID='http://ec2-54-201-112-78.us-west-2.compute.amazonaws.com:9001/delete/';




@Injectable({
  providedIn: 'root',
})
export class CreatebookService {

  //create a book by author
  createBook(book: Books, uploadedImage: File) {
    const formData = new FormData();
    formData.append('bookstring', JSON.stringify(book));

    formData.append('image', uploadedImage);

    return this.http.post(BASE_URL, formData);
  }

//get all books by author
  getBooks(){
    return this.http.get(BASE_URL_GET_BOOKS);
  }

  //get books by author id
  getBooksByauthorId(authorId:number){
    
    return this.http.get(BASE_URL_GET_BOOKS_BY_AUTH_ID+authorId);
  }
  
  //update book by author
  updateBook(book:Books,id:number){
    return this.http.put(BASE_URL_PUT_BY_BOOK_ID+id, book);
  }

  //delete book by author
  deleteBook(id:number){
    return this.http.delete(BASE_URL_DELETE_BY_BOOK_ID+id);
  }
  

  constructor(public http: HttpClient) {}
}
