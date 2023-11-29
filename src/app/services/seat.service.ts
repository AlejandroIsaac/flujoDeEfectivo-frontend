import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seat } from '../models/Seat.model';
import { NewSeatDTO } from '../models/NewSeatDTO.model';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(
    private http: HttpClient
  ) { }

  getAllSeat(){
    return this.http.get<Seat[]>("http://localhost:8080/seat")
  }

  create(newSeat: NewSeatDTO){
    return this.http.post<Seat>("http://localhost:8080/seat",newSeat)
  }
}
