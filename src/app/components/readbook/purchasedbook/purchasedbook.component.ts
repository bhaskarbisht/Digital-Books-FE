import { Component, OnInit } from '@angular/core';
import Books from 'src/app/Entity/Books';
import { PurchsedbookService } from 'src/app/purchsedbook.service';

@Component({
  selector: 'app-purchasedbook',
  templateUrl: './purchasedbook.component.html',
  styleUrls: ['./purchasedbook.component.css']
})
export class PurchasedbookComponent implements OnInit {
  books: Books[] = [];


  userId:number=JSON.parse(sessionStorage.getItem('userId')); 

  constructor(private purchaseservice:PurchsedbookService) { }

  ngOnInit(): void {
    const promise = this.purchaseservice.getPuchasedBooks(this.userId) //getpurchased Book
    promise.subscribe((response) => {
      this.books = response as Books[];
      console.log(this.books);
    });
  }

}
