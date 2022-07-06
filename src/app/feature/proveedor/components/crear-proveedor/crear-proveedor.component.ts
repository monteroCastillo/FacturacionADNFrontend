import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {

  proveedor :Proveedor = new Proveedor();
  constructor(private proveedorServicio:ProveedorService, private router:Router) { }

  ngOnInit(): void {
  }

  crearProveedor(){
    this.proveedorServicio.crearProveedor(this.proveedor).subscribe({next:() =>{
      //  this.getAll();
      }, error: () =>{}
    })
  }

  irALaListaDeProveedores(){
    this.router.navigate(['/proveedores'])
  }

  onSubmit(){
    this.crearProveedor();
    console.log(this.proveedor);
  }

}
