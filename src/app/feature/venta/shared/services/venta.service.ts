import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private httpClient : HttpClient) { }

  private baseURL = "http://localhost:8083/factura/sumarFacturas";

  obtenerVenta(fecha:string):Observable<number>{
    console.log("Fecha de busqueda " + fecha);
    return this.httpClient.get<number>(`${this.baseURL}/${fecha}`);
  }
}
