import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private proveedorService: ProveedorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.proveedorService.obtenerProveedorPorId(this.id).subscribe(dato => {
      this.proveedor = dato;
    });
  }

  irAlaListaDeProveedores() {
    this.router.navigate(['/proveedor/listar-proveedores']);

  }

  onSubmit() {
    this.proveedorService.actualizarProveedor(this.proveedor).subscribe(() => {
      this.irAlaListaDeProveedores();

    });
  }

}
