import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoootAccout, RoootAccoutDTO } from '../models/RootAccount.model';
import { NewAccountDTO } from '../models/NewAccountDTO.model';

@Injectable({
  providedIn: 'root'
})
export class RootAccountService {

  constructor(
    private http : HttpClient
  ) { }

  createRootAccount(rootAccounDTO: NewAccountDTO){
    return this.http.post<RoootAccout>("http://localhost:8080/rootAccount", rootAccounDTO);
  }

  getAllRootAccout(){
    return this.http.get<RoootAccout[]>("http://localhost:8080/rootAccount");
  }
}
