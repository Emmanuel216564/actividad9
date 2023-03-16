import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPartida } from './IPartida';
import { ISolicitudMaterial } from './ISolicitudMaterial';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISubpartida } from './ISubpartida';
import { ICategoria } from './ICategoria';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  

  solicitudesArchivoURL: string = '/assets/solicitudesMaterial.json';
  partidasArchivoURL: string = '/assets/partidas.json';
  subpartidasArchivoURL: string = '/assets/subpartidas.json';
  
  private idSolicitud: string = "";
  private idSolicitud$ = new BehaviorSubject<string>("");
  
  private solicitudesMaterial = new Observable<ISolicitudMaterial[]>();
  private partidas = new Observable<IPartida[]>();
  private subpartidas = new Observable<ISubpartida[]>();
  private categorias = new Observable<ICategoria[]>();

  constructor(private http: HttpClient) 
  {     
    this.idSolicitud = ""   
  }
 
  getSolicitudesMaterial(): Observable<ISolicitudMaterial[]> {
    this.solicitudesMaterial = this.http.get<ISolicitudMaterial[]>(this.solicitudesArchivoURL);
    return this.solicitudesMaterial;    
  }

  getPartidas(): Observable<IPartida[]> {
    this.partidas = this.http.get<IPartida[]>(this.partidasArchivoURL);
    return this.partidas;
  }

  getSubpartidas(): Observable<ISubpartida[]> {
    this.subpartidas = this.http.get<ISubpartida[]>(this.subpartidasArchivoURL);
    return this.subpartidas;
  }

  getCategorias(): Observable<ICategoria[]> {
    this.categorias = this.http.get<ICategoria[]>(this.partidasArchivoURL);
    return this.categorias;
  }

  

  setIdSolicitud(id:string)
  {
    this.idSolicitud=id;
    this.idSolicitud$.next(this.idSolicitud);;
  }
  
  getIdSolicitudMaterial(): string {
    return this.idSolicitud;
  } 
}