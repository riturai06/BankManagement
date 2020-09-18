import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { MutualFund, Account } from '../details';
import { Usermodel } from '../user';
import { stringify } from '@angular/compiler/src/util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfund',
  templateUrl: './addfund.component.html',
  styleUrls: ['./addfund.component.css']
})
export class AddfundComponent implements OnInit {

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

    if (this.fundForm.invalid) {
      return;
    }

    this.funddetails = {
      "fundId": this.funddetails.fundId,
      "fundName": this.funddetails.fundName,
      "amount": this.funddetails.amount,
      "timestamp": null,
      "user": {
        "account": [],
        "confirmPassword": "",
        "contactNo": "",
        "dob": null,
        "emailId": "",
        "firstName": "",
        "funddetails": [],
        "lastName": "",
        "panNo": window.localStorage.getItem('panNo'),
        "password": "",
        "username": ""

      },
      "account": {
        "accountNo": this.account.accountNo,
        "bankName": this.account.bankName,
        "ifsc": this.account.ifsc,
        "micrCode": this.account.micrCode,
        "user": {
          "account": [],
          "confirmPassword": "",
          "contactNo": "",
          "dob": null,
          "emailId": "",
          "firstName": "",
          "funddetails": [],
          "lastName": "",
          "panNo": window.localStorage.getItem('panNo'),
          "password": "",
          "username": ""
        }
      }
    }
    this.userService.createMf(this.funddetails).subscribe((response) => {
      if (response.status === 200) {
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
