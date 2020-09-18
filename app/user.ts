  
import { LoginComponent } from './login/login.component';
import { Account, MutualFund } from './details';

export class Usermodel {

    panNo:any;
    firstName:string;
    lastName:string;
    username:string;
    password:string;
    confirmPassword:string;
    emailId:string;
    contactNo:any;
    dob:Date;
    account:Account[];
    funddetails: MutualFund[];
}


