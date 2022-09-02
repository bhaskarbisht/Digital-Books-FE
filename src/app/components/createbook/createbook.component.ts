import { Component, OnInit } from '@angular/core';
import { CreatebookService } from 'src/app/createbook.service';
import Books from 'src/app/Entity/Books';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css'],
})
export class CreatebookComponent implements OnInit {
  book: Books = new Books();

  saveBook() {
    const observable = this.createbookservice.createBook(this.book);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error) {
        console.log(error);
        alert('something went wrong');
      }
    );
  }

  constructor(public createbookservice: CreatebookService) {}

  ngOnInit(): void {}
}
