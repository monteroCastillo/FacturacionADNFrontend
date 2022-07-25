import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';

@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrls: ['./actualizar-proveedor.component.css']
})
export class ActualizarProveedorComponent implements OnInit {

  id: number;
  proveedor: Proveedor = new Proveedor();
  proveedorForm: FormGroup;
  constructor(protected proveedorService: ProveedorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(this.id !== undefined){
      this.proveedorService.obtenerProveedorPorId(this.id).subscribe(dato => {
        this.proveedor = dato;
      });
    }
  }

  irAlaListaDeProveedores() {
    this.router.navigate(['/proveedor/listar-proveedores']);

  }

  onSubmit() {
    this.proveedorService.actualizarProveedor(this.proveedor).subscribe(() => {
      Swal.fire({
        title: 'Registro realizado exitosamente!',
        icon: 'success',
        timer: 2000,
      });

    });
    this.irAlaListaDeProveedores();
  }

}
