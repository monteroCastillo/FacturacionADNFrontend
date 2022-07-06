import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';

@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrls: ['./actualizar-proveedor.component.css']
})
export class ActualizarProveedorComponent implements OnInit {

  id:number
  proveedor:Proveedor = new Proveedor();
  constructor(private proveedorService:ProveedorService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proveedorService.obtenerProveedorPorId(this.id).subscribe(dato =>{
      this.proveedor = dato;
    }, error => console.log(error));
  }

  irAlaListaDeProveedores(){
    this.router.navigate(['/proveedores']);
    //swal('Proveedor actualizada',`La  proveedor ${this.proveedor.nombre} ha sido actualizada con exito`,`success`);
  }

   onSubmit(){
    this.proveedorService.actualizarProveedor(this.proveedor).subscribe(() => {
      this.irAlaListaDeProveedores();
     // this.proveedorService.crearProveedor(this.proveedor);
    },error => console.log(error));
  }

}
