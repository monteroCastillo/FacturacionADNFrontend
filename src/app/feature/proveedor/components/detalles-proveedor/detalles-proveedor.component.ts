import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';

@Component({
  selector: 'app-detalles-proveedor',
  templateUrl: './detalles-proveedor.component.html',
  styleUrls: ['./detalles-proveedor.component.css']
})
export class DetallesProveedorComponent implements OnInit {

  id:number;
  proveedor:Proveedor;

  constructor(private route:ActivatedRoute,private proveedorServicio:ProveedorService, private location:Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proveedor = new Proveedor();
    this.proveedorServicio.obtenerProveedorPorId(this.id).subscribe(dato =>{
        this.proveedor = dato;
    });
  }

  irAtras(){
    this.location.back;
  }

}
