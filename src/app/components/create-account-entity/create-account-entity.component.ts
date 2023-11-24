import { Component } from '@angular/core';
import { RoootAccout, RoootAccoutDTO } from 'src/app/models/RootAccount.model';
import { RootAccountService } from 'src/app/services/root-account.service';
import { PrecedingAccountService } from 'src/app/services/preceding-account.service';
import { AccountService } from 'src/app/services/account.service';
import { PrecedingAccount } from 'src/app/models/PrecedingAccount.model';
import { NewAccountDTO } from 'src/app/models/NewAccountDTO.model';


@Component({
  selector: 'app-create-account-entity',
  templateUrl: './create-account-entity.component.html',
  styleUrls: ['./create-account-entity.component.css']
})
export class CreateAccountEntityComponent {
  accoutype:String="";

  precedingAccountList :PrecedingAccount[]=[];
  rootAccountList : RoootAccout[]=[];

  constructor(
    private rootAccountService:RootAccountService,
    private precedingAccountService: PrecedingAccountService,
    private accountService : AccountService
  ){
    //console.log("CreateAccountEntityComponent=> Ejecuta constructor")
  }
  newAccountDtoClear: NewAccountDTO={
    name:"",
    description: "",
    code:"",
    total: 0,
    debe:"",
    haber:"",
    rootAccount:{
      idRoot:0,
      name:"",
      description: "",
      code: "",
      total: 0,
      debe:"",
      haber:"",
    },
    precedingAccount:{
      idPreceding:0,
      name:"",
      code: "",
      description: "",
      total: 0,
      //rootAccount:RoootAccout;
    }
  }
  newAccountDTO: NewAccountDTO ={
    name:"",
    description: "",
    code:"",
    total: 0,
    debe:"",
    haber:"",
    rootAccount:{
      idRoot:0,
      name:"",
      description: "",
      code: "",
      total: 0,
      debe:"",
      haber:"",
    },
    precedingAccount:{
      idPreceding:0,
      name:"",
      code: "",
      description: "",
      total: 0,
      //rootAccount:RoootAccout;
    }
  }

  ngOnInit():void{
    //obtener todas las preceding account para el formulario
    this.precedingAccountService.getAllPrecedingAccount().subscribe(precedingAccouts=>{
      console.log("precedingAccoutList ",precedingAccouts);
      this.precedingAccountList=precedingAccouts;
    });
    //obtener todas las RootAccount para el formulario
    this.rootAccountService.getAllRootAccout().subscribe(rootAccouts => {
      console.log("rootAccouts ", rootAccouts);
      this.rootAccountList= rootAccouts;
    });
  }
  
  createRootAccount(){
    switch(this.accoutype){
      case "Cuenta raiz" : 
      console.log("SELECT CUENTA RAIZ =>",this.accoutype);
      this.rootAccountService.createRootAccount(this.newAccountDTO).subscribe(data=>{
        console.log("Lo que le mandamos ",this.newAccountDTO);
        console.log("Resultado de la peticion =>", data);
        alert("Se creo exitosamente");
        this.newAccountDTO= this.newAccountDtoClear;//limpiamos el formulario
      });
        break;
      case "Subcuenta":
        console.log("SELECT SUBCUENTA =>",this.accoutype);
        this.precedingAccountService.createPrecedingAccount(this.newAccountDTO).subscribe(data=>{
        console.log("Lo que le mandamos ",this.newAccountDTO);
        console.log("Resultado de la peticion =>", data);
        alert("Se creo exitosamente");
        this.newAccountDTO= this.newAccountDtoClear;//limpiamos el formulario
        });
        break
      case "Cuenta":
        console.log("SELECT CUENTA=>",this.accoutype);
        this.accountService.createAccount(this.newAccountDTO).subscribe(data=>{
        console.log("Lo que le mandamos ",this.newAccountDTO);
        console.log("Resultado de la peticion =>", data);
        alert("Se creo exitosamente");
        this.newAccountDTO= this.newAccountDtoClear;//limpiamos el formulario
        });
        break;
      default:
        alert("Selecciona un tipo de cuenta");
        break
    }
  }
}
