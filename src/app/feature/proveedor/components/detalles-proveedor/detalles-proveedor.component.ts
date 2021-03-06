import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';

@Component({
  selector: 'app-detalles-proveedor',
  templateUrl: './detalles-proveedor.component.html',
  styleUrls: ['./detalles-proveedor.component.css']
})
export class DetallesProveedorComponent implements OnInit {

  id: number;
  proveedor: Proveedor;

  constructor(private route: ActivatedRoute, protected proveedorServicio: ProveedorService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.proveedor = new Proveedor();
    if(this.id !== undefined){
      this.proveedorServicio.obtenerProveedorPorId(this.id).subscribe(dato => {
        this.proveedor = dato;
      });
    }
  }

  irAtras() {
    this.router.navigate(['/proveedor/listar-proveedor']);

  }

}
