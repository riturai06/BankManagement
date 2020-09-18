  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MutualFund } from './details';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import {MatIconModule} from '@angular/material/icon';
import { TransactionsComponent } from './transactions/transactions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {TokenInterceptor} from './interceptor';
import { APP_BASE_HREF } from '@angular/common';
import { MutualfundComponent } from './mutualfund/mutualfund.component';
import { AddfundComponent } from './addfund/addfund.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    AccountComponent,
    HomeComponent,
    AccountdetailsComponent,
    MutualfundComponent,
    DashboardComponent,
    TransactionsComponent,
    AddfundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi:true
  }, HttpClientModule,  {
    provide: APP_BASE_HREF, 
    useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
