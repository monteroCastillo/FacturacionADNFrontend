import { HttpService } from '@core/services/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from '../models/planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private baseURL = 'http://localhost:8083/plantas/index';

  private baseURL2 = 'http://localhost:8083/apiPlanta/crear';

  private baseURL3 = 'http://localhost:8083/apiPlanta/borrar';

  private baseURL4 = 'http://localhost:8083/apiPlanta/actualizar';

  private baseURL5 = 'http://localhost:8083/plantas/buscar';

  constructor(private httpClient: HttpService) { }

  obtenerListaDePlantas() {
    return this.httpClient.doGet<Planta[]>(`${this.baseURL}`);
  }

  crearPlanta(planta: Planta) {
    return this.httpClient.doPost(`${this.baseURL2}`, planta);
  }

  actualizarPlanta(planta: Planta) {
    return this.httpClient.doPut<Planta,boolean>(`${this.baseURL4}`, planta);
  }

  obtenerPlantaPorId(id: number): Observable<Planta> {
    return this.httpClient.doGet<Planta>(`${this.baseURL5}/${id}`);
  }

  eliminarPlanta(id: number): Observable<object> {
    return this.httpClient.doDelete(`${this.baseURL3}/${id}`);
  }
}
