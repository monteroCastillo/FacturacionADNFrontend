import { Component} from '@angular/core';
import { Planta } from 'src/app/feature/planta/shared/models/planta';
import { Cliente, Factura, Productos } from '../../shared/model/factura';
import { FacturaService } from '../../shared/service/factura.service';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html',
  styleUrls: ['./listar-factura.component.css']
})
export class ListarFacturaComponent  {
  idPrueba: number;
  factura: Factura = new Factura();
  planta: Planta = new Planta();
  productos: Productos[]= [];


  cliente: Cliente = new Cliente();
  constructor(private facturaService: FacturaService) { }


  idBuscarFactura(){
    this.facturaService.obtenerFacturaPorId(this.idPrueba).subscribe((dato: any) =>  {
      this.factura = dato;
      this.productos = dato.productos;
      this.cliente = dato.cliente;
    });

  }

}
