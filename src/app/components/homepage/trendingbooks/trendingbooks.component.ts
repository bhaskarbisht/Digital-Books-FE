import { Component, OnInit } from '@angular/core';
import Books from 'src/app/Entity/Books';
import { ReadbookService } from 'src/app/readbook.service';

@Component({
  selector: 'app-trendingbooks',
  templateUrl: './trendingbooks.component.html',
  styleUrls: ['./trendingbooks.component.css']
})
export class TrendingbooksComponent implements OnInit {
  books: Books[] = [];
  trendingauthors:Books[]=[];
  bestsellers:Books[]=[];
  bookslength:number;

  



  

  constructor(private readbookservice:ReadbookService) { }

  ngOnInit(): void {
    const promise = this.readbookservice.getBooks(); //get books
    promise.subscribe((response) => {
      this.books = response as Books[];
      console.log(this.books);
    
      this.bookslength=this.books.length/3;
     this.trendingauthors=this.books.splice(0,this.bookslength);
     this.bestsellers=this.books.splice(this.bookslength,this.books.length)
    
     console.log(this.books);
     console.log(this.trendingauthors);
     console.log(this.bestsellers);
        
     })
    }

 
  }

     
    
  

