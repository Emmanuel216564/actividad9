import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../datos.service'
import { IPartida }  from '../../assets/IPartida'
import { Router } from '@angular/router';
import { ModalSubpartidasComponent } from '../modal-subpartidas/modal-subpartidas.component';

@Component({
  selector: 'app-modal-partidas',
  templateUrl: './modal-partidas.component.html',
  styleUrls: ['./modal-partidas.component.css']
})


export class ModalPartidasComponent implements OnInit  {
  partidas: IPartida[] = [];
  pageActual:number=1;
  urlaccion:string = 'assets/icon-tabla/';
  //Material table columns
  displayedColumns: string[] = ['id', 'idPartida', 'idSubpartida', 'idCategoria', 'idProveedor', 'nameCategoria', 'nameSubpartida'];
  //Table Data Source
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //Dynamic Data Variable
  data: any;
  public totalRows = 0;

  selectedPartida?: IPartida;
  dialog: any;
 
   constructor(public datosPartida:DatosService,  public modal: MatDialog, private Nav: Router) 
   {     

   }
                
   ngOnInit(): void {
                
     this.datosPartida.getPartidas().subscribe((data: IPartida[])=>{
       console.log(data);
       this.partidas = data;
     })
     
 
   }

   openDialogNew1() {
    const dialogRef = this.dialog.open(ModalSubpartidasComponent);
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

   onSelect(subpartida:any)
   {}


   openDialog(id:any){
    console.log(id)
  }

  GiveDataForm(id: any,accion:string) {
    this.Nav.navigate(['solicitudMaterial']);
        console.log("id"+id);
        console.log("accion"+accion);

  }

 

  solicitudMaterial(app: string,  id: any) {
    console.log("id"+id);
    console.log("app"+app);
    console.log(id,app)
    switch (app) {
      case 'verEventualidad':

        console.log('estaviendo Eventualidad' );
        break;

      case 'editarEventualidad':

        console.log('estaviendo Eventualidad');
        break;

      case 'eliminarEventualiadad':

         this.openDialog

        break;
    }
  }
  }
       
  