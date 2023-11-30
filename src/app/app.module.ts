import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { LibromayorComponent } from './components/libromayor/libromayor.component';
import { LibrodiarioComponent } from './components/librodiario/librodiario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule} from '@angular/material/tabs';
import { MatTreeModule} from '@angular/material/tree';
import { MatIconModule} from '@angular/material/icon';
import { CreateAccountEntityComponent } from './components/create-account-entity/create-account-entity.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { CreateSeatComponent } from './components/create-seat/create-seat.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NabvarComponent,
    LibromayorComponent,
    LibrodiarioComponent,
    CreateAccountEntityComponent,
    CreateSeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTreeModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
