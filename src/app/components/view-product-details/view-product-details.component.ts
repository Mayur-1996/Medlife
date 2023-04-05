import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {
 
  selectedDrugCode!:string|null;
  productDetails:any;
  constructor(private route:ActivatedRoute,  private http:HttpService) { 
    this.selectedDrugCode = this.route.snapshot.paramMap.get('drugCode')
  }
  ngOnInit(): void {
  this.getProductDtailsByCategoryId();
  }

  getProductDtailsByCategoryId(){
    if(this.selectedDrugCode != null){
      const endPoint = "top-deals?drugcode="+this.selectedDrugCode;
     this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
      if(el && el.length > 0){
        this.productDetails = el[0];
        console.log("product-details",this.productDetails);
      }
     },
      error=>{
        console.log(error)
      
     })
    } 
  }
}