import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Venta } from '../../shared/models/venta';
import { VentaService } from '../../shared/services/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  fecha:string;
  valorSuma:number;
  venta:Venta = new Venta();
  constructor(private ventaServicio:VentaService,  private route:ActivatedRoute) { }



  ngOnInit(): void {
    this.fecha = this.route.snapshot.params['fecha'];
    this.ventaServicio.obtenerVenta(this.fecha).subscribe(dato =>{
      this.valorSuma = dato;
    }, error =>console.log(error));
  }

  calcularSuma(fecha:string){
    this.ventaServicio.obtenerVenta(fecha).subscribe(dato =>{
      console.log("El valor que llega del dato es: " + dato);
      this.venta.ventaDia = dato;


    }, error =>console.log(error));
  }




  /* calcularSuma(fecha:string){
    console.log("ENTRO AL METODO " +fecha);
    this.router.navigate(['venta',fecha]);
  } */


  onSubmit (){
    /* this.fecha = this.route.snapshot.params['fecha'];
    this.ventaServicio.obtenerVenta(this.fecha).subscribe(dato =>{
      this.valorSuma = dato;
    }, error =>console.log(error)); */
    }
}


