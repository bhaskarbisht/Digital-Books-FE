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
  userData: any = history.state.data;
  uploadedImage: File;
  firstName:string=JSON.parse(sessionStorage.getItem('firstname')); 
  lastName:string=JSON.parse
  (sessionStorage.getItem('lastname'));     
   authorName:string=this.firstName+" "+this.lastName;
  
  

  public onImageUpload(event) {
    this.uploadedImage = event.target.files[0];
  }

  saveBook() {
    // this.book.authorId = this.userData.userId;
    this.book.authorId =JSON.parse(sessionStorage.getItem('userId'));   
   this.book.author=this.authorName;
    const observable = this.createbookservice.createBook(
      this.book,
      this.uploadedImage
    );
    observable.subscribe(
      (response: any) => {
        console.log(response);
        alert('book saved successfully');
      },
      function (error) {
        console.log(error);
        alert('something went wrong');
      }
    );
  }

  resetStorage(){
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('lastName');



  }

  constructor(public createbookservice: CreatebookService) {}

  ngOnInit(): void {
    if(sessionStorage.getItem('userId')){
        console.log("already present data");
        //this.resetStorage();

    }
    else{
      this.firstName=this.userData.firstName;
      this.lastName=this.userData.lastName
     this.authorName=this.firstName+" "+this.lastName;

    sessionStorage.setItem("userId",JSON.stringify(this.userData.userId));
    sessionStorage.setItem("firstname",JSON.stringify(this.userData.firstName));
    sessionStorage.setItem("lastname",JSON.stringify(this.userData.lastName));
    console.log("data set to session");
    
    }
  
  }
}
