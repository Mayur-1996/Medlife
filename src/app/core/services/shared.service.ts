import { EventEmitter, Injectable, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  emitItem(length: any) {
  
  }



 
  cartCountersObs =new EventEmitter<any>();
 



  constructor() { }

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
