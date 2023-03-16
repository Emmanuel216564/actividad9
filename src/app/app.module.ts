import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatosService } from './datos.service';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { FormsModule } from '@angular/forms';
import { ModalDetailsComponent } from './modal-details/modal-details.component';
import { SolicitudMaterialComponent } from './solicitud-material/solicitud-material.component';
import { ModalEditItemComponent } from './modal-edit-item/modal-edit-item.component';
import { ModalPartidasComponent } from './modal-partidas/modal-partidas.component';
import { ModalSubpartidasComponent } from './modal-subpartidas/modal-subpartidas.component';
import { ModalCategoriasComponent } from './modal-categorias/modal-categorias.component';
import { ModalItemsComponent } from './modal-items/modal-items.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalEditComponent,
    ModalDetailsComponent,
    SolicitudMaterialComponent,
    ModalEditItemComponent,
    ModalPartidasComponent,
    ModalSubpartidasComponent,
    ModalCategoriasComponent,
    ModalItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    MatPaginatorModule,  
    MatDialogModule, 
    FormsModule,  
    MatIconModule
  ],
  providers: [DatosService], 
  bootstrap: [AppComponent]
})


export class AppModule { }
