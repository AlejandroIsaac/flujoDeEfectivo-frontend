import { Account } from "./Account.model";
import { PrecedingAccount } from "./PrecedingAccount.model";
import { AccountAndPrecedingAccount } from "./AccountAndPrecedingaccount.model";
import { TransferAccount } from "./TranferAccount.model";
import { TranferPrecedingAccount } from "./TranferPrecedingAccount.model";
export interface NewSeatDTO{
    date: string,
    number: number,
    description: string,
    debe: number,
    haber: number,
    accountID: Account, 
    tranferTemporal: AccountAndPrecedingAccount
    transferAccount: TransferAccount | null,
    transferPrecedingAccount: TranferPrecedingAccount | null
}