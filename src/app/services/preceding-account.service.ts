import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrecedingAccount } from '../models/PrecedingAccount.model';
import { NewAccountDTO } from '../models/NewAccountDTO.model';
@Injectable({
  providedIn: 'root'
})
export class PrecedingAccountService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPrecedingAccount(){
    return this.http.get<PrecedingAccount[]>('http://localhost:8080/precedingAccount');
  }

  createPrecedingAccount(precedingAccount: NewAccountDTO){
    return this.http.post<PrecedingAccount>('http://localhost:8080/precedingAccount', precedingAccount)
  }
}
