import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private baseURL = 'http://localhost:8083/factura/sumarFacturas';

  constructor(private httpClient: HttpClient) { }

  obtenerVenta(fecha: string) {
    console.log('Fecha de busqueda ' + fecha);
    return this.httpClient.get<number>(`${this.baseURL}/${fecha}`);
  }
}
