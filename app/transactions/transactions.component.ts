import { Component, OnInit } from '@angular/core';
import { Usermodel } from '../user';
import { Account, MutualFund } from '../details';
import { UserserviceService } from '../userservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { windowCount } from 'rxjs/operators';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  abc: any;
  isLoggedIn:boolean = false;
  panNo:string;
  token:string;
  username:string;
  formBuilder: any;
  user : Usermodel = new Usermodel();

  constructor(private userService:UserserviceService,private route : Router) { }
  account :Account = new Account();
  
  funddetails : MutualFund = new MutualFund();
  fundForm: FormGroup;
 
 
  ngOnInit(): void {

    this.panNo= window.localStorage.getItem('panNo');
    this.funddetails.fundId= window.localStorage.getItem('fundId');
    

  }
    
 onSubmit(fundId ){
   fundId = window.localStorage.setItem("fundId", this.funddetails.fundId)
//  this.userService.getTransactionDetails().subscribe((data) =>{this.funddetails= data;console.log('funddetails',data)});

//  this.route.navigateByUrl("/transactions");

//this.username= window.localStorage.getItem('username');
let resp = this.userService.getTransactionDetails();
resp.subscribe((data) =>{this.funddetails= data;console.log('funddetails',data)});

   }
  
}

