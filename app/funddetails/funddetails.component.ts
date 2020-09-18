import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { MutualFund, Account } from '../details';
import { Usermodel } from '../user';
import { stringify } from '@angular/compiler/src/util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-funddetails',
  templateUrl: './funddetails.component.html',
  styleUrls: ['./funddetails.component.css']
})
export class FunddetailsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}