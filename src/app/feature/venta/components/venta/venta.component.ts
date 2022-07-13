import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Venta } from '../../shared/models/venta';
import { VentaService } from '../../shared/services/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  fecha: string;
  valorSuma: number;
  venta: Venta = new Venta();
  constructor(private ventaServicio: VentaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fecha = this.route.snapshot.params.fecha;
    this.ventaServicio.obtenerVenta(this.fecha).subscribe(dato => {
      this.valorSuma = dato;
    }, error => console.log(error));
  }

  calcularSuma(fecha: string) {
    this.ventaServicio.obtenerVenta(fecha).subscribe({
      next: (dato) => {
        console.log('El valor que llega del dato al metodo es: ' + dato);
        this.venta.ventaDia = dato;

      },
      error: () => {
        Swal.fire({
          title: 'No hay registros en esa fecha',
          icon: 'error',
          timer: 2000
        });
      },
    });
  }
}
