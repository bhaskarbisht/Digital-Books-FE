import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/cartservice.service';
import Books from 'src/app/Entity/Books';
import { ReadbookService } from 'src/app/readbook.service';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.css']
})
export class ReadbookComponent implements OnInit {
  userData: any = history.state.data;

 
  books: Books[] = [];
  mainbooks:Books[]=[];
  trendingauthors:Books[]=[];
  bestsellers:Books[]=[];
  bookslength:number;

searchdropdownvalue=0;
searchtext:any;

searchTitle="Trending Books";

firstName:string=JSON.parse(sessionStorage.getItem('firstname')); 
lastName:string=JSON.parse
(sessionStorage.getItem('lastname'));     
 readerName:string=this.firstName+" "+this.lastName;


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
      console.log("books search Result");
      console.log(this.books);
      this.books.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
      this.books = this.books.filter(item => (item.active == true));


      if (this.books.length == 0) {
        alert('Result Not found');
      
      
      }
      else{
      alert('Result found');
      this.searchTitle="Search Results";
      console.log(this.books);
      

      }
    },
    function (error) {
      console.log(error);

      alert('Result Not Found');
    }
  );
}

//code for cart


addtoCart(book:any){
  this.cartservice.addToCart(book);

}



  constructor(private readbookservice:ReadbookService,private cartservice:CartserviceService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('userId')){
      console.log("already present data");
      //this.resetStorage();

  }
  else{
    this.firstName=this.userData.firstName;
    this.lastName=this.userData.lastName
   this.readerName=this.firstName+" "+this.lastName;

  sessionStorage.setItem("userId",JSON.stringify(this.userData.userId));
  sessionStorage.setItem("firstname",JSON.stringify(this.userData.firstName));
  sessionStorage.setItem("lastname",JSON.stringify(this.userData.lastName));
  console.log("data set to session");
  
  }
    console.log(this.userData);
    const promise = this.readbookservice.getBooks(); //get books
    promise.subscribe((response) => {    
      this.books = response as Books[];

      this.books = this.books.filter(item => (item.active == true));


      console.log(this.books);
      console.log(this.mainbooks);
      this.books.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    
    this.bookslength=this.books.length/3;
     this.trendingauthors=this.books.splice(0,this.bookslength);
     this.bestsellers=this.books.splice(this.bookslength,this.books.length)
    
     console.log(this.books);
     console.log(this.trendingauthors);
     console.log(this.bestsellers);

     

    });
  }

}
