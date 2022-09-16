import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/cartservice.service';

@Component({
  selector: 'app-readheader',
  templateUrl: './readheader.component.html',
  styleUrls: ['./readheader.component.css']
})
export class ReadheaderComponent implements OnInit {
totalbooksincart:number=0;

  constructor(private cartservice:CartserviceService) { }

  ngOnInit(): void {
    this.cartservice.getProductData().subscribe(res=>{
      this.totalbooksincart=res.length;
    })
  }

}
