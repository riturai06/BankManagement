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
  constructor(private userService: UserserviceService, private route: Router) { }

  user: Usermodel = new Usermodel();

  ngOnInit(): void {

  }

  onFormSubmit() {

    this.userService.createUser(this.user).subscribe((data) => { console.log(data), error => console.log(error) });
    // alert("User Created");
    this.route.navigateByUrl("/login");
    //this.myForm.reset();

  }
}