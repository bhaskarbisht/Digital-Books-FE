import { Component, OnInit } from '@angular/core';
import { CreatebookService } from 'src/app/createbook.service';
import Books from 'src/app/Entity/Books';

@Component({
  selector: 'app-authorbooks',
  templateUrl: './authorbooks.component.html',
  styleUrls: ['./authorbooks.component.css']
})
export class AuthorbooksComponent implements OnInit {
  books: Books[] = [];

  authorId:number=JSON.parse(sessionStorage.getItem('userId'));

  constructor(private bookservice:CreatebookService) { }

  ngOnInit(): void {
    const promise = this.bookservice.getBooksByauthorId(this.authorId);
    promise.subscribe((response) => {
      this.books = response as Books[];
      console.log(this.books);
    });

    
  }

}
