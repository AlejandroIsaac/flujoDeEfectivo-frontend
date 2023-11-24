import { PrecedingAccount } from "./PrecedingAccount.model";

export interface Account{
    name: string;
	code: string;
	description: string
	total: number;
	precedingAccount: PrecedingAccount;
}