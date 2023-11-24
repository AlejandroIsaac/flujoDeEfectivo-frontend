import { RoootAccout } from "./RootAccount.model";
import { PrecedingAccount } from "./PrecedingAccount.model";




export interface NewAccountDTO{
   
    name: string;
    code: string;
    description: string;
    total: number;
    //para rootAccount
    debe: string;
    haber: string;
    //para precedingAccount
    rootAccount: RoootAccout;
    //para account 
    precedingAccount:PrecedingAccount;


}