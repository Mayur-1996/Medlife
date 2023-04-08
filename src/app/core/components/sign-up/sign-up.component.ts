import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit,OnDestroy {
 signForm! :FormGroup;
 isGetOtp:boolean=false;
 otpCounter:number=0;
 sub!:Subscription;
 constructor(private fb:FormBuilder){ }
  ngOnInit(): void {
   this.initializeForm();
  }
 initializeForm(){
 this.signForm = this.fb.group({
  "userName":[],
  "password":[],
  "mobileNumber":[],
  "isMobNoVerfied":[false]
 })
 }
 signUp(){
  console.log(this.signForm.value)
 }

 verifyOtp(){
  
 }

 getOtp(){
 this.isGetOtp = true;

  this.sub = interval(1000).subscribe((el:number)=>{
    this.otpCounter = 60 - el;
    if(this.otpCounter === 0){
      this.sub.unsubscribe
    }
  console.log(el);
 })
 }
 
 ngOnDestroy(){
  this.sub.unsubscribe();
 }
}

