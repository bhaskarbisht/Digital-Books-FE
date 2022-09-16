import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/cartservice.service';
import Purchase from 'src/app/Entity/Purchase';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books:any=[];
  
  purchasedArray:Purchase[]=[];

email:string;
invoiceflag=false;
  allBooks:any;
  today = new Date();
  pay="click to pay";
  load=false;
  color="btn-primary"

  constructor(private cartservice:CartserviceService) { }

  ngOnInit(): void {
    this.cartservice.getProductData().subscribe(res=>{
      this.books=res;
      console.log("cart book");
      console.log(this.books);
      this.books.forEach((a:any)=>{
        Object.assign(a,{userId:JSON.parse(sessionStorage.getItem('userId'))});
      });

      this.allBooks=this.cartservice.getTotalAmount();
    })
  }

removeProducts(book:any){
  this.cartservice.removeCartData(book);
}
removeAllProduct(){
  this.cartservice.removeAllCart();
}

showLoader(){

this.load=true;

for(var i=0;i<this.books.length;i++){
  this.purchasedArray[i]=
    {
      userId:this.books[i].userId,
      bookId:this.books[i].bookId,
      email:this.email,
      
    }
  
}

this.savePurchase();

setTimeout(()=>{
  this.load=false;
  this.pay="Transaction  successfull please check your book in purchased section";
  this.color="btn btn-success";
  this.invoiceflag=true;
  this.removeAllProduct();
},3000);
}


savePurchase(){
  const observable = this.cartservice.savePurchase(this.purchasedArray);
  observable.subscribe(
    (response: any) => {
      console.log(response);
     
    },
    function (error) {
      console.log(error);
      alert('Not purchased');
    }
  );
}



}
