import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout'
import { from, Subscription } from 'rxjs';
import { trigger, state,style, animate,transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'bms';
  mediaSub: Subscription;
  deviceXs: boolean;
  notifications = 0;
  showSpinner = false;
  constructor(public mediaObserver: MediaObserver) { }
  //buttonDisable:any;
  panNo: string;
  token: string;
  username: string;
  isLoggedIn: boolean = false;
  userNewName: string = window.localStorage.getItem('username');
  fundId: any;

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias)
      this.deviceXs = result.mqAlias == 'xs' ? true : false;
    });

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

  loaddata() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 10000);
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}



