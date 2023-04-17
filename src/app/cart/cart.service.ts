import { Injectable } from '@angular/core';
import { SharedService } from '../core/services/shared.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private shared:SharedService) { }

  addItemToCart(item:any){
    let cartItems:any  = this.getProductDataFromLoacalStorage();
      
    cartItems.push(item);  
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    this.shared.emitItem(cartItems.length)
  }

  getProductDataFromLoacalStorage(){
      
    let items = localStorage.getItem("cartItems");
    if(items){
      items = JSON.parse(items)
      return items;
    }else{
      return[];
    }
  }
}
