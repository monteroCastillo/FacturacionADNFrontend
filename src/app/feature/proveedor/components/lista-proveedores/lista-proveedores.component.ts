import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent implements OnInit {

  proveedor:Proveedor[];
  constructor(private proveedorServicio:ProveedorService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerProveedor();
  }

  private obtenerProveedor(){
    this.proveedorServicio.obtenerListaDeProveedores().subscribe(dato =>{
      this.proveedor = dato;
      console.log(this.proveedor);
    })
  }

  actualizarProveedor(id:number){
    this.router.navigate(['actualizar-proveedor',id])
  }

  verDetallesDelProveedor(id:number){
    this.router.navigate(['detalles-proveedor',id]);
  }

  eliminarProveedor (id:number){
    this.proveedorServicio.eliminarProveedor(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerProveedor();
    });
  }
}
