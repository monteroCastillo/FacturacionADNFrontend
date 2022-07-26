import { Component } from '@angular/core';
import { ServicioAlertasService } from '@core/services/servicio-alertas.service';

import { Venta } from '../../shared/models/venta';
import { VentaService } from '../../shared/services/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent  {

  fecha: string;
  valorSuma: number;
  venta: Venta = new Venta();
  constructor(private ventaServicio: VentaService, protected alertaServicio: ServicioAlertasService) { }

  calcularSuma() {

    this.ventaServicio.obtenerVenta(this.fecha).subscribe({
      next: (dato) => {

        this.venta.ventaDia = dato;
        if(dato === null){
          this.alertaServicio.mensajeDeError('No hay registros en esa fecha');

        }
      },
      error: () => {
      },
    });
  }
}


