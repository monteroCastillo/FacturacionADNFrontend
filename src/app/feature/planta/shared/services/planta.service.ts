import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from '../models/planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private baseURL = "http://localhost:8083/plantas/index";

  private baseURL2 = "http://localhost:8083/apiPlanta/crear";

  private baseURL3 = "http://localhost:8083/apiPlanta/borrar";

  private baseURL4 = "http://localhost:8083/apiPlanta/actualizar";

  private baseURL5 = "http://localhost:8083/plantas/buscar";

  constructor(private httpClient : HttpClient) {}

  obtenerListaDePlantas():Observable<Planta[]>{
    return this.httpClient.get<Planta[]>(`${this.baseURL}`);
  }

  crearPlanta(planta:Planta): Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`,planta);
  }

  /* actualizarPlanta(id:number,planta:Planta):Observable<Object>{
    return this.httpClient.put<Planta>(`${this.baseURL4}/${id}`,planta);
  } */
  actualizarPlanta(planta:Planta):Observable<Object>{
    return this.httpClient.put<Planta>(`${this.baseURL4}`,planta);
  }

  obtenerPlantaPorId(id:number):Observable<Planta>{
    return this.httpClient.get<Planta>(`${this.baseURL5}/${id}`);
  }

  eliminarPlanta(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL3}/${id}`);
  }


}
