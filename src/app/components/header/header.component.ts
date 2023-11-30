import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Org } from 'src/app/models/Org.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  

  org:Org={
    name:"Joyaz ferreteria",
    addrees: "Av principal, San Antono, Acambay, Edo Mex",
    contact:"Tel: 5584232359"
  }
}
