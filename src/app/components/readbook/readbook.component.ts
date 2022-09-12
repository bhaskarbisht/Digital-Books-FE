import { Component, OnInit } from '@angular/core';
import Books from 'src/app/Entity/Books';
import { ReadbookService } from 'src/app/readbook.service';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.css']
})
export class ReadbookComponent implements OnInit {
  books: Books[] = [];


  constructor(private readbookservice:ReadbookService) { }

  ngOnInit(): void {
    const promise = this.readbookservice.getBooks(); //get books
    promise.subscribe((response) => {
      this.books = response as Books[];
      console.log(this.books);
    });
  }

}
