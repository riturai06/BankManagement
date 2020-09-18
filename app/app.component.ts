import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { trigger, state,style, animate,transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Bmanagement';
  mediaSub: Subscription;
  deviceXs: boolean;
  notifications = 0;
  showSpinner = false;
  constructor() { }
  //buttonDisable:any;
  panNo: string;
  token: string;
  username: string;
  isLoggedIn: boolean = false;
  userNewName: string = window.localStorage.getItem('username');
  fundId: any;

  ngOnInit(): void {
    this.username = window.localStorage.getItem('username');
    this.token = window.localStorage.getItem('token');
    this.fundId = window.localStorage.getItem('funddetails.fundId');
    this.panNo = window.localStorage.getItem('panNo');
    if (this.token != null && this.token.length > 10) {
      this.isLoggedIn = true;
    }
    // if(window.localStorage.getItem('token')!=null){
    //   this.buttonDisable = 'none';
    // }

  }
  updateStats() {
    throw new Error('Method not implemented.');
  }


  loaddata() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 10000);
  }

  ngOnDestroy() {
    //this.mediaSub.unsubscribe();
  }
}



