import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Purchase from './Entity/Purchase';

// const PURCHASE_URL="http://localhost:9002/purchase";

const PURCHASE_URL="http://ec2-54-201-112-78.us-west-2.compute.amazonaws.com:9002/purchase";



@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  cartDataList:any=[];
  bookList=new BehaviorSubject<any>([]);

  

  constructor(private http:HttpClient) { }

savePurchase(purchase:Purchase[]){
  return this.http.post(PURCHASE_URL, purchase);
}


getProductData(){
  return this.bookList.asObservable();
}

// setProduct(product:any){
//   this.cartDataList.push(...product);
//   this.bookList.next(product);
// }

addToCart(book:any){
  alert("Book Added to cart");
  this.cartDataList.push(book);
  this.bookList.next(this.cartDataList);
  this.getTotalAmount();
  console.log(this.cartDataList);
  console.log(this.bookList);
}
getTotalAmount():number{
  let total=0;
  this.cartDataList.map((a:any)=>{
    total +=a.total;
  })
  console.log(total);
  return total;
}

removeCartData(book:any){
  console.log("data delete");
  console.log(book);
  this.cartDataList.map((a:any,index:any)=>{
  if(book.bookId==a.bookId){
    this.cartDataList.splice(index,1);
  }
  })
 this.bookList.next(this.cartDataList); 
}
removeAllCart(){
  this.cartDataList=[];
  this.bookList.next(this.cartDataList);
}

}
