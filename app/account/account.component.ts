
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

  token: string;
  username: string;

  @Input() panNo = window.localStorage.getItem('this.user.panNo');
  accountForm: FormGroup;

  constructor(private userService: UserserviceService, private formBuilder: FormBuilder, private route: Router) { }
  user: Usermodel = new Usermodel();
  account: Account = new Account();
  ngOnInit(): void {
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
    this.account = {
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
      ;
    console.log("data");

    this.userService.addProduct(this.account).subscribe((response) => {


      //  if (response.status === 200) {

      //    alert("Account added Successfully");
      //  } else {
      //    alert("adding Account failed Try Again");
      //  }


    }

    );
    //alert("Account Added to User ");
    this.route.navigateByUrl("/accountdetails");
  }
}