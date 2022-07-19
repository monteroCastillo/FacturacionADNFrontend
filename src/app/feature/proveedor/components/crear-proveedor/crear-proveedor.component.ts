import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {

  proveedorForm: FormGroup;

  proveedor: Proveedor = new Proveedor();
  constructor(private proveedorServicio: ProveedorService, private router: Router) { }

  ngOnInit() {
    this.construirFormularioProveedor();
  }

  crearProveedor() {
    this.proveedorServicio.crearProveedor(this.proveedor).subscribe({
      next: () => {
        Swal.fire({title:'Registro realizado exitosamente!', icon:'success',timer:2000});
      }, error: () => { }
    });
    this.router.navigate(['proveedor/listar-proveedor']);
  }

  irALaListaDeProveedores() {
    this.router.navigate(['proveedor/proveedores']);
  }

  crear() {
    this.crearProveedor();

  }

  private construirFormularioProveedor(){
    this.proveedorForm = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('',
        [Validators.required]),
      descripcion: new FormControl('', [Validators.required])
    });
  }

}
