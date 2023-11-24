import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountTreeDTO } from '../models/AccountTree.model';

@Injectable({
  providedIn: 'root'
})
export class AccountTreeService {

  constructor(private http: HttpClient) { }

  getAccountTree(){
    return this.http.get<AccountTreeDTO[]>('http://localhost:8080/rootAccount/tree');
  }
}
