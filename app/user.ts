import { LoginComponent } from './login/login.component';
import { Account, MutualFund } from './details';

export class Usermodel {

    panNo:string;
    firstName:string;
    lastName:string;
    username:string;
    password:string;
    confirmPassword:string;
    emailId:string;
    contactNo:any;
    dob:Date;
    guardianType:string;
    guardianName:string;  
    citizenship:string;
    gender :string;
    maritalStatus:string;
    registrationDate:Date;
    address:string;
    city:string;
    state:string;
    country:string;
    account:Account[];
    funddetails: MutualFund[];
}




