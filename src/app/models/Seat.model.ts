import { Action } from "rxjs/internal/scheduler/Action";
import { Account } from "./Account.model";







export interface Seat{
    date: string;
    number: number;
    description: string;
    debe: number;
    haber: number;
    accountID: Account; 
    transferAccount: Account;
    transferPrecedingAccount: Account;
}