import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Seat } from 'src/app/models/Seat.model';
import { SeatService } from 'src/app/services/seat.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const elements:Seat[]=[];
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-librodiario',
  templateUrl: './librodiario.component.html',
  styleUrls: ['./librodiario.component.css']
})
export class LibrodiarioComponent {
  //para actualizar la tabla
  @ViewChild(MatTable) myTable!: MatTable<any>;
  //variable auxiliar para filtrar atributo tranferAccount
  seatTemporal?:Seat;

  seats:Seat[]=[];

  displayedColumns: string[] = ['number', 'description', 'cuenta','date', 'debe','haber', 'transfer'];
  dataSource:Seat[]=[];
  

  //inyectamos el servicio
  constructor(
    private seatService: SeatService
  ){}
  //Consultar los asientos de la DB
  ngOnInit():void{
    this.dataSource
    this.seatService.getAllSeat().subscribe(data=>{
      //console.log("Resultado de GET DATA SEAT", data);
       data.forEach(element =>{
         if(element.transferPrecedingAccount === null){
           this.seats.push(element);
         }else{
          this.seatTemporal= element;
          this.seatTemporal.transferAccount=element.transferPrecedingAccount;
          this.seats.push(this.seatTemporal);
         }
       });
       //console.log("Resultado de filtarr this.seats", this.seats)
      this.dataSource=this.seats;
      //console.log("Asignacion seats a Datasource", this.dataSource)
    });
  }

  updateTable(seat:Seat){
    console.log("SOY EL PAPA YA ME ENTERE QUE HAY UN NUEVO ASIENTO", seat);
    this.dataSource.push(seat);
    console.log("DATASOURCE",this.dataSource);
    
    this.myTable.renderRows();
  }

}
