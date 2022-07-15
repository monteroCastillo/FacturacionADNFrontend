import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css'],
})
export class ListaProveedoresComponent implements OnInit {
  proveedor: Proveedor[];
  public listaProveedores: Observable<Proveedor[]>;
  constructor(
    protected proveedorServicio: ProveedorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listaProveedores = this.proveedorServicio.consultar();
  }

  actualizarProveedor(id: number) {
    this.router.navigate(['proveedor/actualizar-proveedor', id]);
  }

  verDetallesDelProveedor(id: number) {
    this.router.navigate(['proveedor/detalles-proveedor', id]);
  }

  eliminarProveedor(id: number) {
    this.proveedorServicio.eliminarProveedor(id).subscribe((dato) => {
      console.log(dato);
    });
    Swal.fire({title:'Registro eliminado exitosamente!', icon:'success',timer:2000});
    this.listaProveedores = this.proveedorServicio.consultar();
  }

  crearProveedorForm(){
    this.router.navigate(['proveedor/crear-proveedor']);
  }
}
