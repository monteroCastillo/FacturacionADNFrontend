import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { map } from 'rxjs';
import { Factura } from '../model/factura';
import { FacturaCrear } from '../model/factura-crear';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private baseURL = 'http://localhost:8083/factura/guardar';

  private baseURL2 = 'http://localhost:8083/factura/buscar';


  constructor(private httpClient: HttpService) { }

  crearFactura(factura: FacturaCrear) {
    return this.httpClient.doPost(`${this.baseURL}`, factura);
  }

  obtenerFacturaPorId(id: number) {
    return this.httpClient.doGet<Factura>(`${this.baseURL2}/${id}`)
      .pipe(map((response: any)=>response as Factura));
  }

}
