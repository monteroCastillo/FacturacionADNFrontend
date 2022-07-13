import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Planta } from 'src/app/feature/planta/shared/models/planta';
import { Cliente, Factura, Productos } from '../../shared/model/factura';
import { FacturaService } from '../../shared/service/factura.service';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html',
  styleUrls: ['./listar-factura.component.css']
})
export class ListarFacturaComponent implements OnInit {
  id: number;
  factura: Factura = new Factura();
  planta: Planta = new Planta();
  productos: Productos= new Productos();


  cliente: Cliente = new Cliente();
  constructor(private facturaService: FacturaService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.factura = new Factura();

    this.facturaService.obtenerFacturaPorId(13).subscribe(dato =>  {
      this.factura = dato;
      this.productos = dato.productos;
      this.cliente = dato.cliente;
    });

  }

}
