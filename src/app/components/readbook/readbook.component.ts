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
  trendingauthors:Books[]=[];
  bestsellers:Books[]=[];
  bookslength:number;

searchdropdownvalue=0;
searchtext:any;


searchBook(search: any) {
  var promise;
  if(this.searchdropdownvalue==1){
   promise= this.readbookservice.searchBooksByCategory(search);
  }

  else if(this.searchdropdownvalue==2){
    promise = this.readbookservice.searchBooksByAuthor(search);
  }

  else if(this.searchdropdownvalue==3){
    promise = this.readbookservice.searchBooksByPrice(search);
  }
  
  promise.subscribe(
    (response) => {
      this.books = response as any;
      if (this.books == null) {
        alert('Result Not found');
      
      
      }
      else{
      alert('Result found');
      console.log(this.books);
      

      }
    },
    function (error) {
      console.log(error);

      alert('Result Not Found');
    }
  );
}




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
    });
  }

}
