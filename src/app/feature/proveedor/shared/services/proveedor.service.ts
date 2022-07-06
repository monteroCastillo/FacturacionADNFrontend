import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private baseURL = "http://localhost:8083/proveedores/index";

  private baseURL2 = "http://localhost:8083/apiProveedor/actualizar"

  private baseURL3 ="http://localhost:8083/apiProveedor/eliminar"

  private baseURL4 ="http://localhost:8083/proveedores/buscar"

  constructor(private httpClient : HttpClient) { }


  obtenerListaDeProveedores():Observable<Proveedor[]>{
    return this.httpClient.get<Proveedor[]>(`${this.baseURL}`);
  }

  crearProveedor(proveedor:Proveedor): Observable<Object>{
    return this.httpClient.post(`http://localhost:8083/apiProveedor/guardar`,proveedor);
  }

  actualizarProveedor(proveedor:Proveedor):Observable<Object>{
    return this.httpClient.put<Proveedor>(`${this.baseURL2}`,proveedor);
  }

  eliminarProveedor(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL3}/${id}`);
  }

  obtenerProveedorPorId(id:number):Observable<Proveedor>{
    return this.httpClient.get<Proveedor>(`${this.baseURL4}/${id}`);
  }

}
