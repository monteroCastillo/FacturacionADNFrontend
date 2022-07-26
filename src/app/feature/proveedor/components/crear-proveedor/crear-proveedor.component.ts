import { Component } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAlertasService } from '@core/services/servicio-alertas.service';
//import Swal from 'sweetalert2';
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
  constructor(protected proveedorServicio: ProveedorService, private router: Router, protected alertaServicio: ServicioAlertasService) { }

  crearProveedor() {
    this.proveedorServicio.crearProveedor(this.proveedor).subscribe({
      next: () => {
        this.alertaServicio.mensajeConfirmacion('Registro realizado exitosamente!');
      }, error: () => { }
    });
    this.router.navigate(['proveedor/listar-proveedor']);
  }


}
