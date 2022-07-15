import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActualizarProveedorComponent } from './components/actualizar-proveedor/actualizar-proveedor.component';
import { CrearProveedorComponent } from './components/crear-proveedor/crear-proveedor.component';
import { DetallesProveedorComponent } from './components/detalles-proveedor/detalles-proveedor.component';
import { ListaProveedoresComponent } from './components/lista-proveedores/lista-proveedores.component';
import { ProveedorRoutingModule } from './proveedor-routing.module';


@NgModule({
  declarations: [
    ActualizarProveedorComponent,
    CrearProveedorComponent,
    DetallesProveedorComponent,
    ListaProveedoresComponent
  ],
  imports:[
    CommonModule,
    ProveedorRoutingModule,
    FormsModule
  ]

})
export class ProveedorModule { }
