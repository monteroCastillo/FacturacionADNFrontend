import { HttpService } from '@core/services/http.service';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private baseURL = 'http://localhost:8083/proveedores/index';

  private baseURL2 = 'http://localhost:8083/apiProveedor/actualizar';

  private baseURL3 = 'http://localhost:8083/apiProveedor/eliminar';

  private baseURL4 = 'http://localhost:8083/proveedores/buscar';

  constructor(protected httpClient: HttpService) { }

  consultar() {
    return this.httpClient.doGet<Proveedor[]>(`${this.baseURL}`);
  }

  /* obtenerListaDeProveedores(): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(`${this.baseURL}`);
  } */

  crearProveedor(proveedor: Proveedor){
    return this.httpClient.doPost('http://localhost:8083/apiProveedor/guardar', proveedor);
  }

  actualizarProveedor(proveedor: Proveedor){
    return this.httpClient.doPut<Proveedor, boolean>(`${this.baseURL2}`, proveedor);
  }

  eliminarProveedor(id: number): Observable<object> {
    return this.httpClient.doDelete(`${this.baseURL3}/${id}`);
  }

  obtenerProveedorPorId(id: number): Observable<Proveedor> {
    return this.httpClient.doGet<Proveedor>(`${this.baseURL4}/${id}`);
  }

}
