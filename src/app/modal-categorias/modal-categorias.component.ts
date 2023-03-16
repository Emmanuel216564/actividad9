import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DatosService } from '../datos.service';
import { ICategoria } from '../ICategoria';

@Component({
  selector: 'app-modal-categorias',
  templateUrl: './modal-categorias.component.html',
  styleUrls: ['./modal-categorias.component.css']
})
export class ModalCategoriasComponent {
  

  categorias: ICategoria[] = [];
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

  selectCategoria?: ICategoria;
  
 
   constructor(public datosCategoria:DatosService,  public modal: MatDialog, private Nav: Router) 
   {     

   }
                
   ngOnInit(): void {
                
     this.datosCategoria.getSubpartidas().subscribe((data: ICategoria[])=>{
       console.log(data);
       this.categorias = data;
     })
     
     
 
   }

   onSelect(categoria:any)
   {}

   
   openDialog(id:any){
    
    console.log(id)
  }

  GiveDataForm(id: any,accion:string) {
    this.Nav.navigate(['subpartidas']);
        console.log("id"+id);
        console.log("accion"+accion);
  }

  Subpartidas(app: string,  id: any) {
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
