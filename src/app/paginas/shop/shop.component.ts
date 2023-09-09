import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { product } from '../../paginas/shop/productmodal';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html'

})
export class ShopComponent {
  // data!:any|product[]
  // constructor (private api:DataService){}
  // ngOnInit(): void {
  //   this.displayproducts();
      
  // }
  // displayproducts(){
  //   this.api.getproduct().subscribe(res=>{
  //   this.data = res;
  //   console.log(res);
  //   })
  // }
}