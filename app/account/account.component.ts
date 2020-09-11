import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { Account } from '../details';
import { Usermodel } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  abc: any;
  isLoggedIn: boolean = false;
  // panNo:string;
  token: string;
  username: string;

  @Input() panNo = window.localStorage.getItem('this.user.panNo');
  accountForm: FormGroup;

  constructor(private userService: UserserviceService, private formBuilder: FormBuilder, private route: Router) { }
  user: Usermodel = new Usermodel();
  account: Account = new Account();
  ngOnInit(): void {
    //this.panNo = window.localStorage.getItem('panNo');
    this.token = window.localStorage.getItem('token');
    this.username = window.localStorage.getItem('username');

    this.accountForm = this.formBuilder.group({
      accountNo: ['', [Validators.required]],
      bankName: ['', [Validators.required]],
      micrCode: ['', [Validators.required]],
      ifsc: ['', [Validators.required]],
    });

    if (this.token != null && this.token.length > 10) {
      this.isLoggedIn = true;
    }
  }

  onFormSubmit() {

    if (this.accountForm.invalid) {
      return;
    }
    // this.userService.createAccount(this.account).subscribe(data => console.log(data), error => console.log(error));
    // alert("Account Created");
    //  this.route.navigateByUrl("/dashboard");
    // //this.myForm.reset();
    this.account= {
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
   //  const uploadProductData = new FormData();
    // uploadProductData.append('account', this.account);
    //  uploadProductData.append('ifsc', this.account.ifsc);
    //  uploadProductData.append('bankName', this.account.bankName);
    //  uploadProductData.append('micrCode', this.account.micrCode);
    //  uploadProductData.append('panNo', this.panNo);
     //this.panNo= window.localStorage.getItem('panNo');
    console.log("data");
    //console.log(uploadProductData.get('account'));
    this.userService.addProduct(this.account).subscribe((response) => {


      // if (response.status === 200) {

      //   alert("Account added Successfully");
      // } else {
      //   alert("adding Account failed Try Again");
      // }


    }

    );
    alert("Account Added to User ");
    this.route.navigateByUrl("/account");
  }
}


