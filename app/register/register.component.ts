import { Component, OnInit } from '@angular/core';
import { Usermodel } from '../user';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: any;
  updateSubscription: Subscription;
  constructor(private userService: UserserviceService, private route: Router) { }

  user: Usermodel = new Usermodel();

  ngOnInit(): void {
    this.updateSubscription = interval(1000).subscribe(
      (val) => { this.onFormSubmit()});
  }

  onFormSubmit() {
    // this.userForm= new FormGroup({
    //   firstName : new FormControl([Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    //   lastName : new FormControl([Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    //   panNo : new FormControl([Validators.required,Validators.pattern('^[a-zA-Z0-9]+')]),
    //   password : new FormControl([Validators.required]),
    //   confirmPassword : new FormControl([Validators.required]),
    //   dob : new FormControl([Validators.required]),
    //   contactNo : new FormControl([Validators.required, Validators.maxLength(10),Validators.minLength(10)]),
    //   emailId : new FormControl([Validators.required, Validators.email]),
    //   gender : new FormControl([Validators.required]),
    //   maritalStatus : new FormControl([Validators.required]),
    // });

    this.userService.createUser(this.user).subscribe((data) => { console.log(data), error => console.log(error) });
    alert("User Created");
    this.route.navigateByUrl("/login");
    //this.myForm.reset();

  }
}
