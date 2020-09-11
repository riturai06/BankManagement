import { Component, OnInit } from '@angular/core';
import { MutualFund, Account } from '../details';
import { Usermodel } from '../user';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styleUrls: ['./transactiondetails.component.css']
})
export class TransactiondetailsComponent implements OnInit {
  abc: any;
  isLoggedIn:boolean = false;
  panNo:string;
  token:string;
  username:string;
  fundId: MutualFund[] ;
  funddetails : MutualFund[];
  constructor(private userService : UserserviceService, private router : ActivatedRoute) { }
  user : Usermodel = new Usermodel();
  account :Account = new Account(this.user);
 
  //funddetails : MutualFund = new MutualFund();
  ngOnInit(): void {
    this.panNo = window.localStorage.getItem('panNo');
    this.token = window.localStorage.getItem('token');
    this.username = window.localStorage.getItem('username');
    this.funddetails.fundId= window.localStorage.getItem('fundId');
  //this.funddetails = new MutualFund();
  this.userService.getTransactionDetails().subscribe((data) => {this.funddetails= this.funddetails;console.log('funddetails',data)});
    if(this.token != null && this.token.length > 10){
      this.isLoggedIn = true;
    }
  
    this.userService.getTransactionDetails().subscribe((data) => {this.funddetails= data;console.log('funddetails',data)});
   // this.funddetails.fundId= window.localStorage.getItem('fundId');
    //let resp = this.userService.getTransactionDetails();
    //resp.subscribe((data) =>{this.funddetails= this.funddetails;console.log('funddetails',data)});
  }

}
