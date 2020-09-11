import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MutualFund } from './details';
import { MutualfundComponent } from './mutualfund/mutualfund.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import {MatIconModule} from '@angular/material/icon';
import { ViewtransactionComponent } from './viewtransaction/viewtransaction.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {TokenInterceptor} from './interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    HomeComponent,
    RegisterComponent,
    AccountComponent,
    MutualfundComponent,
    DashboardComponent,
    LogoutComponent,
    AccountdetailsComponent,
    ViewtransactionComponent,
    TransactionsComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
