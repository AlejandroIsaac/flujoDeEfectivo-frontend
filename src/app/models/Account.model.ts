import { PrecedingAccount } from "./PrecedingAccount.model";

export interface Account{
	idAccount:number;
    name: string;
	code: string;
	description: string;
	total: number;
	precedingAccount: PrecedingAccount | null;
}