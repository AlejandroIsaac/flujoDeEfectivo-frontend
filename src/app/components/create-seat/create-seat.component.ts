import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from 'src/app/models/Account.model';
import { PrecedingAccount } from 'src/app/models/PrecedingAccount.model';
import { AccountAndPrecedingAccount } from 'src/app/models/AccountAndPrecedingaccount.model';
import { AccountService } from 'src/app/services/account.service';
import { PrecedingAccountService } from 'src/app/services/preceding-account.service';
import { NewSeatDTO } from 'src/app/models/NewSeatDTO.model';
import { TransferAccount } from 'src/app/models/TranferAccount.model';
import { SeatService } from 'src/app/services/seat.service';
import { TranferPrecedingAccount } from 'src/app/models/TranferPrecedingAccount.model';
import { Seat } from 'src/app/models/Seat.model';

@Component({
  selector: 'app-create-seat',
  templateUrl: './create-seat.component.html',
  styleUrls: ['./create-seat.component.css']
})
export class CreateSeatComponent {
  
  //evento para refrescar la tabla del componenete padre
  @Output() eventChangeTable = new EventEmitter<Seat>();

  accountList: Account[]= [];//Lista de cuentas
  //acountAndPrecedingtemporal:AccountAndPrecedingAccount={id:0, name:""};
  accountAndPrecedingaccountList: AccountAndPrecedingAccount[]=[];//Lista de cuentas y subcuentas

  precedingAccountsList:PrecedingAccount[]=[];
  accountAndSubAccount: Account[]=[]; 

  newSeatDTO : NewSeatDTO={
    date: "",
    number: 0,
    description: "",
    debe: 0,
    haber: 0,
    accountID: {
      idAccount:0,
      name: "",
	    code: "",
	    description: "",
	    total: 0,
	    precedingAccount: {
        idPreceding:0,
        name:"",
        code: "",
        description: "",
        total: 0
      }
    }, 
    tranferTemporal:{
      id:0,
      name: "",
      type:""
    },
    transferAccount: {
      idAccount: 0,
      name:"" 
    },
    transferPrecedingAccount: {
      idPreceding: 0,
      name:""
    }
  }
  
  //para limpiar formulario
  clearSeatDTO= { 
    date: "",
    number: 0,
    description: "",
    debe: 0,
    haber: 0,
    accountID: {
      idAccount:0,
      name: "",
	    code: "",
	    description: "",
	    total: 0,
	    precedingAccount: {
        idPreceding:0,
        name:"",
        code: "",
        description: "",
        total: 0
      }
    }, 
    tranferTemporal:{
      id:0,
      name: "",
      type:""
    },
    transferAccount: {
      idAccount: 0,
      name:"" 
    },
    transferPrecedingAccount: {
      idPreceding: 0,
      name:""
    }
    }
  constructor(
    private accountService: AccountService,
    private precedingAccountService: PrecedingAccountService,
    private seatService: SeatService
  ){}

   ngOnInit(): void{
     //consulta cuentas
     this.accountService.getAccountList().subscribe(data=>{
      this.accountList=data;
      console.log("AccountList", this.accountList)
      this.accountList.forEach(element => {
        let acountAndPrecedingtemporal:AccountAndPrecedingAccount={id:0, name:"",type:""};
        acountAndPrecedingtemporal.id=element.idAccount;
        acountAndPrecedingtemporal.name=element.name;
        acountAndPrecedingtemporal.type= "account";
        this.accountAndPrecedingaccountList.push(acountAndPrecedingtemporal);
      });
      console.log("Cuentas y subcuentas", this.accountAndPrecedingaccountList);

     });
     //consultar subcuentas
     this.precedingAccountService.getAllPrecedingAccount().subscribe(data=>{
      this.precedingAccountsList= data;
      console.log("Subcuentas", this.precedingAccountsList);

      this.precedingAccountsList.forEach(element => {
        let acountAndPrecedingtemporal:AccountAndPrecedingAccount={id:0, name:"", type:""};
        acountAndPrecedingtemporal.id=element.idPreceding;
        acountAndPrecedingtemporal.name=element.name;
        acountAndPrecedingtemporal.type="preceding"
        this.accountAndPrecedingaccountList.push(acountAndPrecedingtemporal);
      });
      console.log("Cuentas y subcuentas", this.accountAndPrecedingaccountList);
     })
   }


  createSeat(){
    console.log("Crear asiento lo que capturaste", this.newSeatDTO)
    //logica para setear tranferAccount o PrecedingTranferAccount
    if(this.newSeatDTO.tranferTemporal.type === "account"){
      let trasnferTemporal: TransferAccount = {idAccount: 0,name:"" };
      trasnferTemporal.idAccount =this.newSeatDTO.tranferTemporal.id;
      trasnferTemporal.name =this.newSeatDTO.tranferTemporal.name;

      this.newSeatDTO.transferAccount = trasnferTemporal;
      this.newSeatDTO.transferPrecedingAccount = null;
    }else if(this.newSeatDTO.tranferTemporal.type === "preceding"){
      let trasnferTemporal: TranferPrecedingAccount = {idPreceding: 0,name:"" };
      trasnferTemporal.idPreceding = this.newSeatDTO.tranferTemporal.id;
      trasnferTemporal.name= this.newSeatDTO.tranferTemporal.name;
      
      this.newSeatDTO.transferPrecedingAccount= trasnferTemporal;
      this.newSeatDTO.transferAccount = null;
    }

    console.log("Crear asiento despues de filtrar tranferAccoun o tranferPrecedingAccount", this.newSeatDTO)
    //Guarda en DB
    this.seatService.create(this.newSeatDTO).subscribe(data=>{
      console.log("new seat",data)
      alert("Se creo exitosamente");
      //limpiar formulario
      this.newSeatDTO = this.clearSeatDTO;
      //fix el nuevo seat si es que tranfer es de tipo PrecedingAccount cambiar valor a tranferaccount para renderizar en la tabla de manera correcta
      if(data.transferPrecedingAccount !== null){
        let traferAccount : Account = {idAccount:0, name: "", code: "", description: "", total: 0, precedingAccount: null}
        data.transferAccount = traferAccount;
        data.transferAccount.name = data.transferPrecedingAccount.name;
      }
      //actualizar la tabla
      this.eventChangeTable.emit(data);
    });

  }


}
