import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Account, MutualFund } from '../details';
import { Usermodel } from '../user';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  account: Account[];
  fundDetails : MutualFund[];
  user : Usermodel[];
  username : string;
  fundId: any;

  
  constructor(private userService : UserserviceService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.fundId= window.localStorage.getItem('fundId');

    
    this.userService.getMutualFund().subscribe((data) => {this.fundDetails= data;console.log('fundDetails',data)});
  }

}
