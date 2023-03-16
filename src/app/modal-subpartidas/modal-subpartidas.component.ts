import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DatosService } from '../datos.service';
import { ISubpartida } from '../ISubpartida';
import { ModalCategoriasComponent } from '../modal-categorias/modal-categorias.component';

@Component({
  selector: 'app-modal-subpartidas',
  templateUrl: './modal-subpartidas.component.html',
  styleUrls: ['./modal-subpartidas.component.css']
})
export class ModalSubpartidasComponent implements OnInit{

  subpartidas: ISubpartida[] = [];
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

  selectSubpartida?: ISubpartida;
  dialog: any;
  
 
   constructor(public datosSubpartida:DatosService,  public modal: MatDialog, private Nav: Router) 
   {     

   }
                
   ngOnInit(): void {
                
     this.datosSubpartida.getSubpartidas().subscribe((data: ISubpartida[])=>{
       console.log(data);
       this.subpartidas = data;
     })
     
    
   }

   openDialogNew2() {
    const dialogRef = this.dialog.open(ModalCategoriasComponent);
  
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
    this.Nav.navigate(['partidas']);
        console.log("id"+id);
        console.log("accion"+accion);
  }

  partidas(app: string,  id: any) {
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
