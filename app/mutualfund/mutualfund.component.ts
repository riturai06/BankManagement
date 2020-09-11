import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { MutualFund, Account } from '../details';
import { Usermodel } from '../user';
import { stringify } from '@angular/compiler/src/util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mutualfund',
  templateUrl: './mutualfund.component.html',
  styleUrls: ['./mutualfund.component.css']
})
export class MutualfundComponent implements OnInit {

  abc: any;
  isLoggedIn: boolean = false;
  panNo: string;
  token: string;
  username: string;
  accountNo: string;
  funddetails: MutualFund = new MutualFund();
  fundForm: FormGroup;

  constructor(private userService: UserserviceService, private formBuilder: FormBuilder, private route: Router) { }

  user: Usermodel = new Usermodel();
  account: Account = new Account();
  ngOnInit(): void {
    this.fundForm = this.formBuilder.group({
      fundId: ['', [Validators.required]],
      fundName: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      panNo: ['', [Validators.required]],
      accountNo: ['', [Validators.required]],
    });
    this.panNo = window.localStorage.getItem('panNo');
    this.token = window.localStorage.getItem('token');
    this.username = window.localStorage.getItem('username');
    this.funddetails.fundId = window.localStorage.getItem('fundId');
    window.localStorage.setItem("panNo", this.panNo);
    if (this.token != null && this.token.length > 10) {
      this.isLoggedIn = true;
    }


  }
  fundId: string;
  onFormSubmit() {

    // this.userService.createAccount(this.account).subscribe(data => console.log(data), error => console.log(error));
    // alert("Account Created");
    //  this.route.navigateByUrl("/dashboard");
    // //this.myForm.reset();
    if (this.fundForm.invalid) {
      return;
    }

    this.funddetails= {
      "fundId": this.funddetails.fundId,
      "fundName":this.funddetails.fundName,
      "amount":this.funddetails.amount,
      "timestamp": null,
      "user":{
        "account":[],
        "address":"",
        "citizenship":"",
        "city":"",
        "confirmPassword":"",
        "contactNo":"",
        "country":"",
        "dob":null,
        "emailId":"",
        "firstName":"",
        "funddetails":[],
        "gender":"",
        "guardianName":"",
        "guardianType":"",
        "lastName":"",
        "maritalStatus":"",
        "panNo": window.localStorage.getItem('panNo'),
        "password":"",
        "registrationDate": null,
        "state":"",
        "username":""

      },
      "account":{      
      "accountNo":this.account.accountNo,
      "bankName":this.account.bankName,
      "ifsc":this.account.ifsc,
      "micrCode":this.account.micrCode,
      "user":{
        "account":[],
        "address":"",
        "citizenship":"",
        "city":"",
        "confirmPassword":"",
        "contactNo":"",
        "country":"",
        "dob":null,
        "emailId":"",
        "firstName":"",
        "funddetails":[],
        "gender":"",
        "guardianName":"",
        "guardianType":"",
        "lastName":"",
        "maritalStatus":"",
        "panNo": window.localStorage.getItem('panNo'),
        "password":"",
        "registrationDate": null,
        "state":"",
        "username":""
      }
    }
    }
    // const uploadProductData = new FormData();
    // uploadProductData.append('fundId', this.funddetails.fundId);
    // uploadProductData.append('fundName', this.funddetails.fundName);
    // uploadProductData.append('amount', this.funddetails.amount); 
    // uploadProductData.append('panNo', this.panNo = window.localStorage.getItem('panNo'));
    // uploadProductData.append('accountNo', this.account.accountNo);
    // console.log("data");
    // console.log(uploadProductData.get('funddetails'));
    this.userService.createMf(this.funddetails).subscribe((response) => {
      if (response.status === 200) {
        //    window.localStorage.setItem('fundId', response.result.fundId);

        alert("Fund added Successfully");
      } else {
        alert("adding Fundfailed Try Again");
      }

    }


    );
    alert("Fund Added to Fund Id: ");
    this.route.navigateByUrl("/dashboard");
  }

}
