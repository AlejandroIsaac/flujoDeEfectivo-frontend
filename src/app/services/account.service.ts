import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewAccountDTO } from '../models/NewAccountDTO.model';
import { Account } from '../models/Account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  createAccount(newAccount: NewAccountDTO){
    return this.http.post<Account>("http://localhost:8080/account", newAccount)
  }
}
