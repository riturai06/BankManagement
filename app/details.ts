import { LoginComponent } from './login/login.component';
import { Usermodel } from './user';
import { UserserviceService } from './userservice.service';
export class Account{
    accountNo:any;
    ifsc:string;
    bankName:string;
    micrCode:string;
    user : Usermodel;
}

export class MutualFund{
    fundId:string;
    fundName:any;
    amount:any;
    timestamp:any;
    account:Account;
    user:Usermodel;
}