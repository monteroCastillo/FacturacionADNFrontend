import { Component } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent{

  proveedorForm: FormGroup;

  proveedor: Proveedor = new Proveedor();
  constructor(protected proveedorServicio: ProveedorService, private router: Router) { }


  crearProveedor() {
    this.proveedorServicio.crearProveedor(this.proveedor).subscribe({
      next: () => {
        Swal.fire({title:'Registro realizado exitosamente!', icon:'success',timer:2000});
      }, error: () => { }
    });
    this.router.navigate(['/proveedor/listar-proveedor']);
  }


}
