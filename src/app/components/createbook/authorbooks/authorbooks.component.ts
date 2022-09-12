import { Component, OnInit } from '@angular/core';
import { CreatebookService } from 'src/app/createbook.service';
import Books from 'src/app/Entity/Books';

@Component({
  selector: 'app-authorbooks',
  templateUrl: './authorbooks.component.html',
  styleUrls: ['./authorbooks.component.css'],
})
export class AuthorbooksComponent implements OnInit {
  books: Books[] = [];

  authorId: number = JSON.parse(sessionStorage.getItem('userId'));

  fillBook = {
    bookId: 0,
    authorId: 0,
    logo: '',
    title: '',
    category: '',
    price: 0,
    author: '',
    publisher: '',
    publishedDate: '',
    active: false,
    content: '',
  };

  editbook(book) {
    this.fillBook = book;
  }

  //update book by author
  updateBook(id: number) {
    const observable = this.bookservice.updateBook(this.fillBook, id);
    console.log(this.fillBook);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        alert('book updated successfully');
        this.ngOnInit();
      },
      function (error) {
        console.log(error);
        alert('Book Not Updated');
      }
    );
  }


  //delete book
  deleteBook(bookid:number){
    const observable = this.bookservice.deleteBook(bookid);
    observable.subscribe((response: any) => {
      console.log(response);
      alert("book deleted successfully");
      this.ngOnInit();
    });
  }

  constructor(private bookservice: CreatebookService) {}

  ngOnInit(): void {
    const promise = this.bookservice.getBooksByauthorId(this.authorId); //get book by author id
    promise.subscribe((response) => {
      this.books = response as Books[];
      console.log(this.books);
    });
  }
}
