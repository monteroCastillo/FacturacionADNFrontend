import { Component } from '@angular/core';
import Swal from 'sweetalert2';
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
  constructor(private ventaServicio: VentaService) { }

  calcularSuma() {

    this.ventaServicio.obtenerVenta(this.fecha).subscribe({
      next: (dato) => {
        console.log('EL valor de dato en la venta: '+ dato);
        this.venta.ventaDia = dato;
        if(dato ===null){
          Swal.fire({
            title: 'No hay registros en esa fecha',
            icon: 'error',
            timer: 2000
          });
        }
      },
      error: () => {
      },
    });
  }
}


